
//ADICIONE SEUS LINKS FIREBASE
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7a8R8ipQvijNvHBMzyWqDKXjjpH5hgeU",
  authDomain: "kwitter-b7866.firebaseapp.com",
  databaseURL: "https://kwitter-b7866-default-rtdb.firebaseio.com",
  projectId: "kwitter-b7866",
  storageBucket: "kwitter-b7866.appspot.com",
  messagingSenderId: "453610435438",
  appId: "1:453610435438:web:246822cb916b7794c4c77f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//**********************************************
// AULA C95
//**********************************************
//      A função addRoom() ajudará a adicionar nomes de salas em localStorage do Firebase.
//      A função getData() obterá dados do Firebase e os exibirá na página da sala do kwitter.
//      A função redirectToRoomName() será redirecionada para a respectiva sala clicada.

userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
