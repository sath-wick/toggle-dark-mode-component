const switchButton = document.getElementById('switch-button');
const switchBg = document.getElementById('bg');
const switchBox = document.getElementById('switch-box');
let isDark = false;
switchButton.addEventListener('click', function () {
    if(!isDark){
        switchButton.style.transform = "translate(50%,-50%)";
        isDark = true;
        switchBg.style.backgroundPosition = "0 100px";
        switchBg.style.opacity = 1;
        switchBox.style.backgroundPosition = "0 200px";
        switchButton.style.backgroundColor = "gray";
        switchButton.style.backgroundPosition = "0 0";
        document.body.style.backgroundColor = 'black'
        
    }
    else{
        switchButton.style.transform = "translate(-150%,-50%)";
        isDark = false;
        switchBg.style.backgroundPosition = "0 0";
        switchBg.style.opacity = 0;
        switchBox.style.backgroundPosition = "0 100px";
        switchButton.style.backgroundColor = "yellow";
        switchButton.style.backgroundPosition = "0 100px";
        document.body.style.backgroundColor = 'white'
        
    }
});
