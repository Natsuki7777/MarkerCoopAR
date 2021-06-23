// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "AIzaSyDTS24qSbBfLgzVnUAKsI1Mpp56UNtT4Gg",
  authDomain: "coopar-37cbb.firebaseapp.com",
  projectId: "coopar-37cbb",
  databaseURL:
    "https://coopar-37cbb-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "coopar-37cbb.appspot.com",
  messagingSenderId: "212574429739",
  appId: "1:212574429739:web:ba371f14f2f25d2c8fc06e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
console.log(database);
var dataRef = firebase.database().ref("/");
dataRef.on("value", (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  var entity = document.querySelector(".model");
  entity.setAttribute("position", {
    x: data.position[0],
    y: data.position[1],
    z: data.position[2],
  });
  entity.setAttribute("scale", {
    x: data.scale[0],
    y: data.scale[1],
    z: data.scale[2],
  });
  entity.setAttribute("rotaion", {
    x: data.rotaion[0],
    y: data.rotaion[1],
    z: data.rotaion[2],
  });
});
