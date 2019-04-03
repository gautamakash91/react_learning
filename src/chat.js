import React, { Component } from 'react';
import firebase from "firebase";


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
            msgArr:[]
        }
    }

    componentDidMount() {
        var self = this;
        firebase.initializeApp(config);
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            // ...
        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
        });


        firebase.auth().onAuthStateChanged(function (user) {
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

    saveMessage=()=>{
        // console.log(this.state.message);
        var self = this;
        if (this.state.message != "") {
            firebase.firestore().collection('messages').add({
                name: this.state.display_name,
                text: this.state.message,
                profilePicUrl: this.state.profile_img,
                timestamp: new Date()
            }).then(function (doc) {
                // console.log(doc);
                self.setState({
                    message:""
                });
            }).catch(function (error) {
                console.error('Error writing new message to Firebase Database', error);
            });
        }
    }

    loadMessages=()=> {
        var self = this;
        var query = firebase.firestore()
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .limit(12);

        // Start listening to the query.
        query.onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                // console.log(change);
                

                if (change.type === 'removed') {
                    for(var i=0; i<self.state.msgArr;i++){
                        if(self.state.msgArr[i].id==change.doc.id){
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
                    self.state.msgArr.sort(function(a, b){
                        var keyA = new Date(a.timestamp),
                            keyB = new Date(b.timestamp);
                        if(keyA < keyB) return -1;
                        if(keyA > keyB) return 1;
                        return 0;
                    });
                    self.setState({
                        msgArr: self.state.msgArr
                    });
                }
            });
        });

    }

    render() {
        return (
            <div>

                {this.state.msgArr.map((s)=>(
                    <div>
                        <img style={{width:50, borderRadius: 50}} src={s.profilePicUrl} />
                        {s.text}
                    </div>
                ))}
                <input 
                value={this.state.message}
                onChange={(e) => {
                    this.setState({
                        message: e.target.value
                    });
                }} />
                <button
                    onClick={this.saveMessage.bind(this)}
                >
                    Click Me
                </button>
            </div>
        );
    }
}