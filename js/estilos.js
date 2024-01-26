document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}



let question = document.querySelectorAll('.question4');
let btnDropdown = document.querySelectorAll('.question4 .more4')
let answer = document.querySelectorAll('.answer4');
let parrafo = document.querySelectorAll('.answer4 p');

for ( let i = 0; i < btnDropdown.length; i ++ ) {

    let altoParrafo = parrafo[i].clientHeight;
    let switchc = 0;

    btnDropdown[i].addEventListener('click', () => {

        if ( switchc == 0 ) {

            answer[i].style.height = `${altoParrafo}px`;
            question[i].style.marginBottom = '10px';
            btnDropdown[i].innerHTML = '<i>-</i>';
            switchc ++;

        }

        else if ( switchc == 1 ) {

            answer[i].style.height = `0`;
            question[i].style.marginBottom = '0';
            btnDropdown[i].innerHTML = '<i>+</i>';
            switchc --;

        }

    })

}