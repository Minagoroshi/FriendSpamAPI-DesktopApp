import './style.css';
import './app.css';

import logo from './assets/images/pulse.svg';
import {FriendSpam} from '../wailsjs/go/main/App';


document.querySelector('#app').innerHTML = `
    <img id="logo" class="logo">
       <div class="result" id="result"></div>
   <div class="input-box" id="input"></div>
     <div class="block">
         <label>Username: </label>
       <input class="input" id="username" type="username" autocomplete="off" placeholder="Username" />
     </div>
     <div class="block">
        <label>Password: </label>
       <input class="input" id="password" type="password" autocomplete="off" placeholder="Password" />
     </div>
     <div class="block">
        <label>User ID: </label>
       <input class="input" id="uid" type="text" autocomplete="off" placeholder="User ID" />
     </div>
     <div class="block">
         <label>Avatar ID: </label>
       <input class="input" id="avatarid" type="text" autocomplete="off" placeholder="AvatarID" />
     </div>
     </br>
       <button class="btn" onclick="friendSpam()">Spam</button> 
       </div>
`;

document.getElementById('logo').src = logo;


let uidElement = document.getElementById("uid");
let AvtrIdElement = document.getElementById("avatarid");
let nameElement = document.getElementById("username");
let passwordElement = document.getElementById("password");
let resultElement = document.getElementById("result");

// Setup the greet function
window.friendSpam = function () {
    // Get name
    let name = nameElement.value;
    let password = passwordElement.value;
    let uid = uidElement.value;
    let avatarid = AvtrIdElement.value;


    // Check if the input is empty
    if (password === "") return;
    if (name === "") return;
    if (uid === "") return;
    if (avatarid === "") return;


    try {
        FriendSpam(name, password, uid, avatarid)
            .then((result) => {
                // Update result with data back from App.Greet()
                resultElement.innerText = result;
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};





