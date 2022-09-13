const body = document.querySelector('body');
const button = document.querySelector('#darkbutton');
//let texto = document.querySelector("#texto");

function darkmode() {

    //  Verifica se o body possui a classe dark, se sim, retira ela e coloca a classe light
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        localStorage.setItem("theme", "light");

    //  Se a classe que está no body for light, 
    } else {
        body.classList.add('dark');
        localStorage.setItem("theme", "dark");
    }
    
    //console.log(localStorage.getItem("theme"));
}

if (localStorage.getItem("theme") === "dark") {
    body.classList.add('dark');
}

