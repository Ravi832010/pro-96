var firebaseConfig = {
    apiKey: "AIzaSyARqCByx2YWXRsVfBOPaVdW6QmxTTt-gJI",
    authDomain: "kwitterv2-f4b09.firebaseapp.com",
    databaseURL: "https://kwitterv2-f4b09-default-rtdb.firebaseio.com",
    projectId: "kwitterv2-f4b09",
    storageBucket: "kwitterv2-f4b09.appspot.com",
    messagingSenderId: "1013599372404",
    appId: "1:1013599372404:web:cb3d42113830b9b4747d21",
    measurementId: "G-V44P8M2NQT"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
var room_name = localStorage.getItem("room_name");
var user_name = localStorage.getItem("user_name");
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "kwitter.html";
}