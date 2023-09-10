const check = document.getElementById("check")
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

checktheusername()

function checktheusername(){
    if (localStorage.getItem('nickname')===null){
        localStorage.setItem('nickname', "Guest")
        document.getElementById("username").innerHTML = "Guest"
    }
}

if (localStorage.getItem('searchengine')===null){
    localStorage.setItem('searchengine', 'https://google.com/search?q=%s')
  }
function setusername(){
    let result = prompt("Entrez votre nom d'utilisateur, ce nom sera utilisé dans le tchat. Veuillez éviter les caractères spéciaux")
        if (result===null){
            localStorage.setItem('nickname', "Guest")
        }else{
            localStorage.setItem('nickname', result)
        }
        
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