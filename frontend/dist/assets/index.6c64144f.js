const i=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};i();var u="/assets/pulse.088562f0.svg";function a(l,r,n){return window.go.main.App.FriendSpam(l,r,n)}document.querySelector("#app").innerHTML=`
    <img id="logo" class="logo">
      <div class="result" id="result"></div>
      <div class="input-box" id="input">
        <label for="username">Username:</label>
        <input  class="input" id="username" type="text" autocomplete="off"/><br><br>
        
        <label for="password">Password:</label>
        <input class="input" id="password" type="password" autocomplete="off"/><br><br>
        
        <label for="uid">Input UID:</label>
        <input  class="input" id="uid" type="text" autocomplete="off"/><br><br>
        
        <button class="btn" onclick="friendSpam()">Spam</button>
    </div>
    
`;document.getElementById("logo").src=u;let d=document.getElementById("uid"),c=document.getElementById("username"),p=document.getElementById("password"),m=document.getElementById("result");window.friendSpam=function(){let l=c.value,r=p.value,n=d.value;if(r!==""&&l!==""&&n!=="")try{a(l,r,n).then(o=>{m.innerText=o}).catch(o=>{console.error(o)})}catch(o){console.error(o)}};
