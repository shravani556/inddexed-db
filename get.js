var rollnumber=localStorage.getItem("roll");




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
var data=store.get(rollnumber);
console.log(data);
data.onsuccess=e=>{

  var res=e.target.result;
  // console.log(res);
  var main=document.getElementById("mainDiv");
  var left=document.createElement("div");
  left.classList.add("leftDiv");
  var sname=document.createElement("h3");
  sname.textContent=res.name;
  left.appendChild(sname);
  main.appendChild(left);
  var hr=document.createElement("hr");
  left.appendChild(hr);
  var roll=document.createElement("p");
  roll.textContent=res.roll;
  left.appendChild(roll);
var email=document.createElement("p");
email.textContent=res.email;
left.appendChild(email);

  var mobile=document.createElement("div")
right.classList.add("rigthDiv");
var co=document.createElement("p");




var right=document.createElement("div");
right.classList.add("rigthDiv");
var co=document.createElement("p");
co.textContent=res.co;
right.appendChild(co);
main.appendChild(right);
var hr=document.createElement("hr");
right.appendChild(hr);
}
  console.log("sucess.......!");
}
