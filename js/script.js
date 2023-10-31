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
  let result = prompt("Entrez votre nom d'utilisateur, ce nom sera utilisé dans la discussion. Votre nom ne doit contenir que des minuscules")
  if (isAlphaNumeric(result)){
    localStorage.setItem('nomduser', result)
  location.href = 'menu.html'
  }else{
    alert("Votre nom d'utilisateur ne doit contenir que des minuscules")
    username()
  }
  
}

function settheme(){
  if (localStorage.getItem("theme")===null){
    localStorage.setItem("theme", "terre")
  }
  
}
function banned(){
  if (localStorage.getItem('banned')===null){
  
  }else{
    location.href = "banned"
  }
}
function isAlphaNumeric(str) {
  return /^[a-z]+$/.test(str);
}
