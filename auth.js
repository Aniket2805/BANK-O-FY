


import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';
import { getFirestore,collection,setDoc,doc,addDoc,getDoc,updateDoc,deleteDoc} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';


import { deleteUser,updateProfile,createUserWithEmailAndPassword,signOut,getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {

  apiKey: "AIzaSyA9crVY554uG3lZwPgqAGXC0UkezyyzWA0",
  authDomain: "bank-o-fy.firebaseapp.com",
  projectId: "bank-o-fy",
  storageBucket: "bank-o-fy.appspot.com",
  messagingSenderId: "183014842203",
  appId: "1:183014842203:web:299e8baa79894f13fb447e",
  measurementId: "G-02BSZ3JJCM"
  //...
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);




const provider = new GoogleAuthProvider();

console.log(app);
console.log(auth);

// SIGN UP MODULE
document.querySelectorAll("button")[0].addEventListener("click",function(){


var email=document.getElementById("signup").value;
var password=document.getElementById("signup_password").value;
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  
  

    updateProfile(auth.currentUser, {
      displayName: "User"
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  



  
    // alert("Successfully Registred");
    M.toast({html: 'Successfully Registered',classes:"green rounded",outDuration:50});







    // ...
  })  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    M.toast({html:errorMessage,classes:"red rounded"});
   
    // ..
  });

});





let Uemail="";

//LOGIN MODULE
document.querySelectorAll("button")[2].addEventListener("click",function(){

var email=document.getElementById("login").value;
var password=document.getElementById("login_password").value;
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("LOGGED IN");
    // alert("Successfully LOGGED IN");
    M.toast({html: 'Successfully Loged in',classes:"green rounded",outDuration:50})

    document.querySelectorAll("li")[2].innerHTML=('<a  id="logout" >Log Out</a>');
    

    document.querySelectorAll("li")[0].innerHTML=('<a  id="logout" visibility:none></a>');


    document.querySelectorAll("li")[3].innerHTML=('<a id="delete"> Delete Account</a>');
    
//document.querySelector("#detail").style.display="block";



document.getElementById("modal4").style.display="block";

Uemail=user.email;
// AddDocumentCustomId();







    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    M.toast({html:errorMessage,classes:"red rounded",outDuration:50});
    alert(errorCode,errorMessage)
    
  });



})


//DELETE SIGNED IN USER MODULE

document.querySelectorAll("li")[3].addEventListener("click",function(){



  const user = auth.currentUser;

  deleteUser(user).then(() => {
    // User deleted.
    M.toast({html:"User Deleted",classes:"green rounded"});
    document.querySelectorAll("li")[3].innerHTML=("<a id='delete' style='display:none'> Delete Account</a>");
    document.querySelector("#detail").style.display="none";

  }).catch((error) => {
    // An error ocurred
    // ...
  });
  










})

// LOG OUT MODULE
document.querySelectorAll("li")[2].addEventListener("click", function() {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        // alert('Sign-out successful.');
        M.toast({html: 'Logged Out Successfully',classes:"green rounded",outDuration:50})
        
    document.querySelectorAll("li")[0].innerHTML=('<a class="modal-trigger" href="#modal2">Login</a>');
    document.querySelector("#detail").style.display="none";
    document.querySelectorAll("li")[2].innerHTML=('<a  id="logout" style="display:none" >Log Out</a>');
    
document.getElementById("modal4").style.display="none";


      }).catch((error) => {
        // An error happened.
        console.log('An error happened.');
      });		  		  
}


);





//SIGN UP WITH GOOGLE MODULE
document.getElementById("signg").addEventListener("click",function(){


signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    M.toast({html:errorMessage,classes:"red rounded"})
    // ...
  });
}
);




//FORGET PSSWD MODULE
document.getElementById("forget").addEventListener("click",function(){

  var email=document.getElementById("login").value;



sendPasswordResetEmail(auth, email)
  .then(() => {
    M.toast({html: 'Password reset email sent!',classes:"green",outDuration:50})
     
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    M.toast({html:errorMessage,classes:"red rounded"})
    // ..
  });});





  //db
let name=document.getElementById("user_name");
let gname=document.getElementById("fname");
let phone=document.getElementById("mobile");
let add=document.getElementById("add");
let adh=document.getElementById("ano");
let age=document.getElementById("age");
let nat=document.getElementById("nation");
let balance=document.getElementById("bal");
let sub=document.getElementById("addsub");
let email=document.getElementById("email");
let search=document.getElementById("sear");
let deletee=document.getElementById("del");
let addMoney=document.getElementById("am");
let takeMoney=document.getElementById("tm");
let Loan=document.getElementById("loan");
let loantaken=document.getElementById("isloan");
// Add docx with unique ID Aadhar 
async function AddDocumentCustomId(){
if(Uemail===email.value) {


    

  var ref=doc(db,"Users",adh.value);
  const docRef= await setDoc(ref,{
  USER_NAME:name.value,
  GUARDIAN_NAME: gname.value,
  Age:age.value,
    Nationlaity:nat.value,
    Aadhar_No:adh.value,
    Balance:balance.value,
   Email:email.value,
    Address:add.value,
    Mobile_No:phone.value,
    Loan_Taken:"No Loan Taken"
  })
  
  
  
  .then(()=>{
    
    M.toast({html: 'Data Added Successfully',classes:"green"})
  
location. reload()
  
  
  location. reload()
  })
  .catch((error)=>{
    
        alert("Error"+error);
        
    M.toast({html: 'Error',classes:"red"})
        
  
  location. reload()
  
  });
}
else{
  
  M.toast({html: 'Error Email Dont match',classes:"red"})
}
}




addSub.addEventListener("click",AddDocumentCustomId);


async function GetADocument(){


  var ref=doc(db,"Users",adh.value);

const docSnap=await getDoc(ref);

if(docSnap.exists()){
  name.value=docSnap.data().USER_NAME;
  gname.value=docSnap.data().GUARDIAN_NAME;
  phone.value=docSnap.data().Mobile_No;
  age.value=docSnap.data().Age;
  nat.value=docSnap.data().Nationlaity;
  add.value=docSnap.data().Address;
  balance.value=docSnap.data().Balance;
  loantaken.value=docSnap.data().Loan_Taken;

}
else {
  alert("No such Doc");
}








}

sear.addEventListener("click",GetADocument);












async function deleteDocument(){





  var ref=doc(db,"Users",adh.value);

const docSnap=await getDoc(ref);

if(!docSnap.exists()){
alert("No such Exits");
return;
}


await deleteDoc(ref).
then(()=>{
alert("Deleted Successfully");

location. reload()
})
.catch((error)=>{
alert("no"+error);

location. reload()
});




}



deletee.addEventListener("click",deleteDocument);



async function AddSomeMoney(){


  let x=parseInt(prompt("Enter Ammount to be added"));
let y=parseInt(balance.value);
let z=parseInt((x+y));
  var ref=doc(db,"Users",adh.value);
const docRef= await updateDoc(ref,{
  USER_NAME:name.value,
  GUARDIAN_NAME: gname.value,
  Age:age.value,
    Nationlaity:nat.value,
    Aadhar_No:adh.value,
   Balance:z,
    Address:add.value,
    Mobile_No:phone.value

     
})



.then(()=>{

  M.toast({html: 'Updated Successfully New Balance is ' + z,classes:"green",outDuration:50})
})
.catch((error)=>{


M.toast({html: 'Error',classes:"red",outDuration:50})
});
















}

async function TakeoutMoney(){


  let x=parseInt(prompt("Enter Ammount to be deducted"));
let y=parseInt(balance.value);

if(y>=x)
{
let z=parseInt((y-x));
  var ref=doc(db,"Users",adh.value);
const docRef= await updateDoc(ref,{
  USER_NAME:name.value,
  GUARDIAN_NAME: gname.value,
  Age:age.value,
    Nationlaity:nat.value,
    Aadhar_No:adh.value,
   Balance:z,
    Address:add.value,
    Mobile_No:phone.value

     
})



.then(()=>{
alert("Updated Successfully");

M.toast({html: 'Updated Successfully New Balance is ' + z,classes:"green",outDuration:50})
})
.catch((error)=>{
alert("no"+error);
});

}


else {
  //alert("Insufficient Balance");
  
  M.toast({html: 'Insuffienct Balances',classes:"red",outDuration:50})
}







}


async function GiveLoan(){




  M.toast({html: 'For Taking Loan it is recommended to visit our loan info page. And available balance should be above 50,000 ',classes:"green",outDuration:50})

let g;
  let Bal;
  var ref=doc(db,"Users",adh.value);

const docSnap=await getDoc(ref);

if(docSnap.exists()){
g=docSnap.data().Email;
  Bal=docSnap.data().Balance;
}
else {
  alert("No such Doc");
}

if(Bal>=50000){
alert("Processing ....");
  M.toast({html: 'Loan Application Processed Successfully Our agent will contact you shortly at '+g,classes:"green",inDuration:50})
  document.getElementById("isloan").innerHTML=(`
  <input type="text"   placeholder="Loan Taken"  value="Yes Applied for loan "id="isloan">`);




  var ref=doc(db,"Users",adh.value);
  const docRef= await updateDoc(ref,{
    Loan_Taken:"Loan Applied"
       
  })
  
  
  
  .then(()=>{
  alert("Updated Successfully");
  
  M.toast({html: 'Updated Successfully  ',classes:"green",outDuration:50})
  })
  .catch((error)=>{
  alert("no"+error);
  });
  
  }
  















else{
  
alert("Processing ....");
  M.toast({html: 'Available balance should be above 50,000 ',classes:"red",outDuration:50})

}

}






addMoney.addEventListener("click",AddSomeMoney);
takeMoney.addEventListener("click",TakeoutMoney);
Loan.addEventListener("click",GiveLoan);
