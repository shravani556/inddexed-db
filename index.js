var name;
var rollno;
var email;
var store;
var mobileno;


var co;
var sscmks;
var perc;
var yops;
var sscValue;
var interValue;
var intermks;
var intermks1;
var interperc;
var interyops;
var sscradio;
var interradio;

var bValue;
var bmks;
var bmks1;
var bperc;
var byops;
var bradio;
var btechValue;
var diplomaValue;
var btechradio;

function getDetails() {
  co=document.getElementById('career').value;
sscValue=document.getElementById('sscValue').value;
sscmks=document.getElementById('sscmks');
sscmks1=document.getElementById('sscmks1');
perc=document.getElementById('per').value;
yops=document.getElementById('yop').value;

if(sscmks.checked) {
  sscradio=sscmks.value;

}
else {
   sscradio=sscmks1.value;

}



interValue=document.getElementById('interValue').value;
intermks=document.getElementById('intermks');
intermks1=document.getElementById('intermks1');
interperc=document.getElementById('interper').value;
interyops=document.getElementById('interyop').value;

if(intermks.checked) {
  interradio=intermks.value;

}
else {
   interradio=intermks1.value;

}






btechValue=document.getElementById('btechValue');
diplomaValue=document.getElementById('diplomaValue');
bValue=document.getElementById('bValue').value;
bmks=document.getElementById('bmks');
bmks1=document.getElementById('bmks1');
bperc=document.getElementById('bper').value;
byops=document.getElementById('byop').value;

if(btechValue.checked){
  btechradio=btechValue.value;

}
else {
btechradio=diplomaValue.value;

}

if(bmks.checked) {
  bradio=bmks.value;
  console.log(bradio);
}
else{
   bradio=bmks1.value;

}
console.log(co);
console.log(sscValue+" "+sscradio+" "+perc+" "+yops);
console.log(interValue+" "+interradio+" "+interperc+" "+interyops);
console.log(btechradio+" "+bValue+" "+bradio+" "+bperc+" "+byops);

name=document.getElementById('name').value;
rollno=document.getElementById('rollno').value;
email=document.getElementById('email').value;
mobileno=document.getElementById('mobileno').value;
console.log(name+"  "+rollno+" "+email);

if (!window.indexedDB) {
  console.log("indexed db is not working......!");
}
var request=window.indexedDB.open("svitDb",1);
request.onerror=(e)=>{
  console.log(e);
}
request.onupgradeneeded=e=>{
  var dbname=e.target.result;
dbname.createObjectStore("cse",{keyPath:"rollno"});
  console.log("upgraded");
}
request.onsuccess=e=>{
  var dbname=e.target.result;
  store=dbname.transaction("cse","readwrite").objectStore("cse");
  store.put(
  {
    "name":name,
    "rollno":rollno,
    "email":email,
    "mobileno":mobileno,
    "co":co,
    "edudetails": {
      "ssc": [
        sscValue,
        sscradio,
        perc,
        yops
      ],
      "inter": [
        interValue,
        interradio,
        interperc,
      interyops
    ],
      "btech": [
        btechradio,
        bValue,
        bradio,
        bperc,
        byops
      ]


    }


  }
  );
  console.log("sucess.......!");
}
localStorage.setItem("roll",rollno);
window.open("resume.html","_self");
}













































// var name;
// var rollno;
// var email;
// var store;
// function getDetails() {
// name=document.getElementById('name').value;
// rollno=document.getElementById('rollno').value;
// email=document.getElementById('email').value;
// console.log(name+"  "+rollno+"  "+email);
// if (!window.indexedDB) {
//   console.log("indexed db is not working......!");
// }
// var request=window.indexedDB.open("svitDB",1);
// request.onerror=(e)=>{
//   console.log(e);
// }
// request.onupgradeneeded=e=>{
//   var dbname=e.target.result;
// dbname.createObjectStore("cse",{keyPath:"name"});
//   console.log("upgraded");
// }
// request.onsuccess=e=>{
//   var dbname=e.target.result;
//   store=dbname.transaction("cse","readwrite").objectStore("cse");
//   store.put(
//   {
//     "name":name,
//     "rollno":rollno,
//     "email":email,
//
//   }
//   );
//   console.log("sucess.......!");
// }
//
// }
