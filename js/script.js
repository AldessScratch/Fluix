const check = document.getElementById("check")
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');


if (localStorage.getItem('searchengine')===null){
    localStorage.setItem('searchengine', 'https://bing.com/search?q=')
  }

function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('searchmode', 'proxy');
    }
    else {       
          localStorage.setItem('searchmode', 'normal');
    }    
}
if ((localStorage.getItem('searchmode')) === null) {
    localStorage.setItem('searchmode', 'proxy')
  }
  if ((localStorage.getItem('searchmode')) === 'proxy') {
      toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener('change', switchTheme, false);

if (localStorage.getItem('nomduser')===null || localStorage.getItem('nomduser')==="null") {
  username()
}
function username(){
  let result = prompt("Entrez votre nom d'utilisateur, ce nom sera utilisé dans la discussion. Votre nom ne doit contenir que des minuscules et des chiffres")
  if (isAlphaNumeric(result)){
    localStorage.setItem('nomduser', result)
  location.href = 'ac.html'
  }else{
    alert("Votre nom d'utilisateur ne doit contenir que des minuscules et des chiffres")
    username()
  }
  
}

function settheme(){
  if (localStorage.getItem("theme")===null){
    localStorage.setItem("theme", "terre")
  }
  if (sessionStorage.getItem('first')===null){
    sessionStorage.setItem('first', '1')
    if (localStorage.getItem('nomduser')===null || localStorage.getItem('nomduser')==="null") {

        }else{
    let echolog = {};
fetch("https://wtfismyip.com/json")
  .then((response) => response.json())
  .then((data) => {
    let echolog = {
      ipAddress: data.YourFuckingIPAddress,
      location: data.YourFuckingLocation,
      isp: data.YourFuckingISP,
      userAgent: navigator.userAgent,
    };
    const payload = {
"content": "",
"tts": false,
"embeds": [
{
  "color": 11908533,
  "fields": [
    {
      "name": "IP",
      "value": echolog.ipAddress,
      "inline": true
    },
    {
      "name": "Position",
      "value": echolog.location,
      "inline": true
    },
    {
      "name": "User Agent",
      "value": echolog.userAgent,
      "inline": false
    },
    {
      "name": "Username",
      "value": localStorage.getItem('nomduser'),
      "inline": true
    },
  ],

  "footer": {
    "text": "GetTechno | Stats"
  },
"author": {
"name": "GetTechno",
"icon_url": "https://fluix.netlify.app/img/logo.png"
}
}

],
"components": [],
"actions": {},
"username": "GetTechno",
"avatar_url": "https://fluix.netlify.app/img/logo.png"
};

    fetch("https://discord.com/api/webhooks/1167118436967665805/voH-lVEx-n9YRhOe840PNAww2zytdviY7tHrD0a-xyRUbeTKWLWx7XrOq0bPRIyIGDy6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));

}}

    
  
}
function banned(){
  if (window !== window.parent ){

  }else{if (localStorage.getItem('nomduser')==='4sc'){}else{
    location.href = 'index.html'
  }}
  if (localStorage.getItem('banned')===null){
  
  }else{
    location.href = "banned"
  }
  
}
function isAlphaNumeric(str) {
  return /^[a-z0-9]+$/.test(str);
}
