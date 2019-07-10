import React, { Component } from "react";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC_AauTqKe7HYit0fJdMOu7cTlgcii8alE",
  authDomain: "login-a21f3.firebaseapp.com",
  databaseURL: "https://login-a21f3.firebaseio.com",
  projectId: "login-a21f3",
  storageBucket: "login-a21f3.appspot.com",
  messagingSenderId: "423542208198",
  appId: "1:423542208198:web:9ec72d5f0e676b5c"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// var db = firebase.database();

export default class Fb extends Component {

  componentDidMount(){
    db.collection('cities').add({
      name: 'Bangalore',
      country: 'India'
    }).then(ref => {
      console.log('Added document with ID: ', ref.id);
    });
  }

  getData=()=>{
    // db.collection('cities').orderBy("name").limit(3)
    // .then(doc => {
    //   if (!doc.exists) {
    //     console.log('No such document!');
    //   } else {
    //     console.log('Document data:', doc.data());
    //   }
    // })
    // .catch(err => {
    //   console.log('Error getting document', err);
    // });
    db.collection("cities").where("country", "==", "India")
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            console.log(change.doc.data());
        });
    });
  }
  render() {
    return (
      <div>
        <button
          onClick={this.getData.bind(this)}
        >
          Get Data
        </button>
      </div>
    )
  }
}