document.addEventListener('keydown', function(event){
    if (event.ctrlKey && event.key === 'q') {
        document.getElementById('sobre').click();
    }
    if (event.ctrlKey && event.key === 'i') {
        window.open('https://ae01.alicdn.com/kf/Hefa1ee1637f047b79d1edcf4fd766e1ey.jpg_640x640Q90.jpg_.webp');
    }
    if (event.ctrlKey && event.key === 'm') {
        document.getElementById('mensagem').focus();
    }
});