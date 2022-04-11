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

//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom() 
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - "+ Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    
    //End code
    });});}
getData();


function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  window.location = "kwitter.html";
}
