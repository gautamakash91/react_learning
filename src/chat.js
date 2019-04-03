import React, { Component } from "react";
import firebase from "firebase";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

import IconButton from "@material-ui/core/IconButton";

var config = {
  apiKey: "AIzaSyBUXrFWns-cMKUtOuAf48WDvBEs2WVBg-w",
  authDomain: "storagetest-8f84a.firebaseapp.com",
  databaseURL: "https://storagetest-8f84a.firebaseio.com",
  projectId: "storagetest-8f84a",
  storageBucket: "storagetest-8f84a.appspot.com",
  messagingSenderId: "536911759747"
};

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      email: "",
      profile_img: "asdfa",
      message: "",
      msgArr: [],
      like:0,
      dislike:0
    };
  }

  componentDidMount() {
    var self = this;
    firebase.initializeApp(config);
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
      });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.setState({
          display_name: user.displayName,
          email: user.email,
          profile_img: user.photoURL
        });
      } else {
        // User is signed out.
        // ...
      }
    });
    this.loadMessages();
  }

  saveMessage = () => {
    // console.log(this.state.message);
    var self = this;
    if (this.state.message != "") {
      firebase
        .firestore()
        .collection("messages")
        .add({
          name: this.state.display_name,
          text: this.state.message,
          profilePicUrl: this.state.profile_img,
          timestamp: new Date(),
          like: 0
        })
        .then(function(doc) {
          // console.log(doc);
          self.setState({
            message: ""
          });
        })
        .catch(function(error) {
          console.error(
            "Error writing new message to Firebase Database",
            error
          );
        });
    }
  };

//upadte chat
  updateMessage = (s) => {
    // console.log(this.state.message);
    console.log("check11",s.id);
    console.log("check12",s.like)
    var self = this;
      firebase
        .firestore()
        .collection("messages")
        .doc(s.id).set({
          name: s.name,
          text: s.text,
          profilePicUrl: s.profilePicUrl,
          timestamp: new Date(),
          like: s.like+1

        })
        .then(function(doc) {
          // console.log(doc);
          self.setState({
            message: ""
          });
          console.log("check2",s.like)
        })
        .catch(function(error) {
          console.error(
            "Error writing new message to Firebase Database",
            error
          );
        });
    
  };
  //end

  loadMessages = () => {
    var self = this;
    var query = firebase
      .firestore()
      .collection("messages")
      .orderBy("timestamp", "desc")
      .limit(12);

    // Start listening to the query.
    query.onSnapshot(function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
        // console.log(change);

        if (change.type === "removed") {
          for (var i = 0; i < self.state.msgArr; i++) {
            if (self.state.msgArr[i].id == change.doc.id) {
              self.state.msgArr.splice(i, 0);
              self.setState({
                msgArr: self.state.msgArr
              });
            }
          }
        } else {
          var message = change.doc.data();
          message.id = change.doc.id;
          self.state.msgArr.push(message);
          self.state.msgArr.sort(function(a, b) {
            var keyA = new Date(a.timestamp),
              keyB = new Date(b.timestamp);
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
          });
          self.setState({
            msgArr: self.state.msgArr
          });
        }
      });
    });
  };

  render() {
    return (
      <div>
        <div style={{ width: "75%", marginLeft: "12%", marginTop: "20Px" }}>
          
          <input
            value={this.state.message}
            onChange={e => {
              this.setState({
                message: e.target.value
              });
            }}
          />
          <Button
          style={{marginLeft:"5px"}}
            variant="outlined"
            color="primary"
            onClick={this.saveMessage.bind(this)}
          >
            Comment
          </Button>
        </div>

        {this.state.msgArr.map(s => (
          <div style={{ width: "75%", marginLeft: "12%", marginTop: "10Px" }}>
            {/* <img style={{width:50, borderRadius: 50}} src={s.profilePicUrl} />
                        {s.text} */}
            <Card>
              <CardContent>
                <Typography style={{ color: "blue" }}>
                  <img
                    style={{ width: 40, borderRadius: 50 }}
                    src={s.profilePicUrl}
                  />{"  "}
                  {s.name}
                </Typography>
                <Typography variant="h6" style={{marginTop:"4px",marginLeft:"5px" }}> {s.text}</Typography>

                <Typography component="p">
                 {s.timestamp.seconds}
                  <br />
                
                </Typography>
              </CardContent>
              <CardActions disableActionSpacing>
                <IconButton aria-label="Add to favorites"  onClick={this.updateMessage.bind(this, s)}>
                  <Icon align="right" style={{ color: "#565656" }}  >
                    thumb_up_alt
                  </Icon>
                </IconButton>
                <IconButton aria-label="Share">
                  <Icon align="right" style={{ color: "#565656" }}   >
                    thumb_down_alt
                  </Icon>
                </IconButton>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
