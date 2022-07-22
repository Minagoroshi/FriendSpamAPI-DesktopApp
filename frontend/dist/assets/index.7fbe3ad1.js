const s=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};s();var a="/assets/pulse.088562f0.svg";function d(n,l,o,r){return window.go.main.App.FriendSpam(n,l,o,r)}document.querySelector("#app").innerHTML=`
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
`;document.getElementById("logo").src=a;let u=document.getElementById("uid"),c=document.getElementById("avatarid"),p=document.getElementById("username"),m=document.getElementById("password"),f=document.getElementById("result");window.friendSpam=function(){let n=p.value,l=m.value,o=u.value,r=c.value;if(l!==""&&n!==""&&o!==""&&r!=="")try{d(n,l,o,r).then(e=>{f.innerText=e}).catch(e=>{console.error(e)})}catch(e){console.error(e)}};
