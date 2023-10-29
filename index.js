const form = document.querySelector('form');
const input = document.querySelector('input');


  form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
      if (localStorage.getItem('searchmode')==="proxy"){
        let url = input.value.trim();
        localStorage.setItem('recherche', input.value.trim())
        if (input.value.trim().includes('porn') || input.value.trim().includes('xxx')){
          localStorage.setItem('banned','1')
          location.href = "./banned.html"
        }else{
          if (!isUrl(url)) url = localStorage.getItem('searchengine') + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
        localStorage.setItem('iframeurl', __uv$config.prefix + __uv$config.encodeUrl(url))
        localStorage.setItem('staturl', './iframe.html');localStorage.setItem('image', '');localStorage.setItem('appname', 'Recherche')
          window.location.href = "./iframe.html"
        }
        
      }else{
        let url = input.value.trim();
        if (!isUrl(url)) url = localStorage.getItem('searchengine') + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
    window.open(url)
      }
    });
});



function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function openURL(appname, image, url) {
  localStorage.setItem('staturl', './iframe.html');
  localStorage.setItem('image', image);
  localStorage.setItem('appname', appname)
    window.navigator.serviceWorker
    .register("./sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      if (!isUrl(url)) url = localStorage.getItem('searchengine') + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
          url = "http://" + url;
            localStorage.setItem('iframeurl', __uv$config.prefix + __uv$config.encodeUrl(url))
            window.location.href = "./iframe.html";
    });
};
function openiniframe(appname, image, iframeurl) {
  localStorage.setItem('iframeurl', iframeurl);
  localStorage.setItem('staturl', './iframe.html');
  localStorage.setItem('image', image);
  localStorage.setItem('appname', appname)
  
  location.href = 'iframe.html'
}
function openpage(appname, image, staturl) {
  localStorage.setItem('staturl', staturl);
  localStorage.setItem('image', image);
  localStorage.setItem('appname', appname)
  window.open(staturl)
}
