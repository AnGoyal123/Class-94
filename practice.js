// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYZFVgcvRzxBPAClb0G9OjRZOCD7N_jtc",
    authDomain: "kwitter-project-624db.firebaseapp.com",
    databaseURL: "https://kwitter-project-624db-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-624db",
    storageBucket: "kwitter-project-624db.appspot.com",
    messagingSenderId: "617061220847",
    appId: "1:617061220847:web:e2425417e097bed297761a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    //Seting the value from the text input to the variable
    user_name1 = document.getElementById("user_name1").value;
    //Seting the value from the text input to the variable
    user_name2 = document.getElementById("user_name2").value;
    
    //Firebase.database() – conneting to database
    //.ref(“/”) – referring to the database name
    //.child(user_name) – creating a main folder with the user name
    //.update – add or update the database
    firebase.database().ref("/").child(user_name1).update({
        purpose: "adding_user1"
    })
    
    //Firebase.database() – conneting to database
    //.ref(“/”) – referring to the database name
    //.child(user_name) – creating a main folder with the user name
    //.update – add or update the database
    firebase.database().ref("/").child(user_name2).update({
    purpose: "adding_user2"
})
document.getElementById("user_name1").value = "";
document.getElementById("user_name2").value = "";
}