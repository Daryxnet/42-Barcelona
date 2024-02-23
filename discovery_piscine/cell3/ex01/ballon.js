
const colors = ['red', 'green', 'blue'];
let numColor = 1;
const maxSize = 420;
const minSize = 200;
let ballon = document.getElementById('ballon');
ballon.addEventListener('click', changeSizeB);
ballon.addEventListener('mouseleave', changeSizeD );

function changeSizeB () {
    let style = window.getComputedStyle(ballon);
    let actualWidth = parseInt(style.getPropertyValue('width'));
    let actualHeight = parseInt(style.getPropertyValue('height'));

    //Cambia tamaño de ballon con click

    if (actualWidth < maxSize && actualHeight < maxSize) {
        ballon.style.width = (actualWidth + 10) + 'px';
        ballon.style.height = (actualHeight + 10) + 'px';

    }
    else {
        ballon.style.width = '200px';
        ballon.style.height = '200px';
    }
    
    //Cambia el color aumento
    ballon.style.backgroundColor = (colors[numColor]);
    numColor = (numColor+1) % colors.length;
    
}

//Cambiar tamaño al dejar mouse
function changeSizeD () {
    let style = window.getComputedStyle(ballon);
    let actualWidth = parseInt(style.getPropertyValue('width'));
    let actualHeight = parseInt(style.getPropertyValue('height'));

    if (actualWidth > minSize && actualHeight > minSize) {
        //Decrece el tamaño con el mouse
        ballon.style.width = (actualWidth - 5) + 'px';
        ballon.style.height = (actualHeight - 5) + 'px';

        if (numColor > 0 && numColor <= 2) {

            ballon.style.backgroundColor = (colors[numColor]);
            numColor = (numColor-1) % colors.length;
            
            
        }
        else {
            ballon.style.backgroundColor = (colors[numColor]);
            numColor = 2
        }

    }
    

    
       




}