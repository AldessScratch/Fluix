const check = document.getElementById("check")
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

username()

if (localStorage.getItem('searchengine')===null){
    localStorage.setItem('searchengine', 'https://google.com/search?q=')
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
  toggleSwitch.addEventListener('change', switchTheme =>{
    location.href = 'settings.html'
  });
function username(){
  if (localStorage.getItem('username')===null){
    let result = prompt("Entrez votre nom d'utilisateur, ce nom sera utilisé dans la discussion. Veuillez éviter les caractères spéciaux")
    localStorage.setItem('username', result)
}
}
  