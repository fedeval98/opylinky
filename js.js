window.onload = function () {
    Particles.init({
      selector:'.background',
      color:'#B46AFF',
      sizeVariations:'5',
      connectParticles:'',
    });
  };

  function openLinks(event){
    const boton = event.target
  
    if (boton.classList.contains('facebook')) {
      window.open("https://www.facebook.com/fede.val.9")
    } else if (boton.classList.contains('instagram')) {
      window.open("https://www.instagram.com/_fede.val/")
    } else if (boton.classList.contains('github')) {
      window.open("https://github.com/fedeval98")
    } else if (boton.classList.contains('linkedin')) {
      window.open("https://www.linkedin.com/in/federico-val")
    } else if (boton.classList.contains('twitter')) {
      window.open("https://twitter.com/_Opytha")
    } else if (boton.classList.contains('twitch')) {
      window.open("https://twitch.tv/opytha")
    }
  }
  
  const botones = document.querySelectorAll('.evento')
  
  botones.forEach(boton => {
    boton.addEventListener('click', openLinks)
  })
  