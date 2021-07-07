document.addEventListener("DOMContentLoaded",()=>{

    /*Declaracion de variables*/
    const btnOpen = document.querySelector("#btnMenuOpen");
    const menuBar = document.querySelector("#menu-bar");
    const btnMenuClose = document.querySelector("#btnMenuClose");
    const enlaces = document.querySelector("#enlaces");

    //Click abrir
    btnOpen.addEventListener("click",()=>{
        menuBar.style.transitionDelay = "0s";
        menuBar.classList.add("active");
    });

    //Click cerrar
    btnMenuClose.addEventListener("click",()=>{
        menuBar.style.transitionDelay = "0s";
        menuBar.classList.remove("active");
    });

    //Click enlaces
    enlaces.addEventListener("click",()=>{
        menuBar.style.transitionDelay = ".5s";
        menuBar.classList.remove("active");
    });




    //Slider de productos
    const contenedor = document.querySelector(".slider");
    const btnIzquierda = document.querySelector("#btn-izquierda");
    const btnDerecha = document.querySelector("#btn-derecha");

    //LLamar evento para el boton derecho
    btnDerecha.addEventListener("click",()=>{
        contenedor.scrollLeft += contenedor.offsetWidth;
    });

    //LLamar evento para el boton izquierod
    btnIzquierda.addEventListener("click",()=>{
        contenedor.scrollLeft -= contenedor.offsetWidth;
    });





    /*Validando el formulario*/
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit",validar);

    function validar(e){
        e.preventDefault();

        const inputNombre = document.querySelector("#nombre").value;
        const inputEmail = document.querySelector("#email").value;
        const inputComment = document.querySelector("#comentarios").value;
        const alertError = document.querySelector("#alertError");
        const alertSucess = document.querySelector("#alertSucces");

        if(inputNombre==0 || inputEmail==0 || inputComment==0){
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            setTimeout(()=>{
                alertError.classList.remove("show");
                alertError.classList.add("hide");
            },3000);
        }else{
            alertSucess.classList.remove("hide");
            alertSucess.classList.add("show");

            setTimeout(()=>{
                alertSucess.classList.remove("show");
                alertSucess.classList.add("hide");
            },3000);
            formulario.reset();
        }
    }


    //SCROLL BOTON TOP
    const btnTop = document.querySelector("#btn-top");
    const logo = document.querySelector("#logo");

    window.addEventListener("scroll",()=>{
        let scroll = document.documentElement.scrollTop;
        let fullSize = document.documentElement.offsetHeight;//Alto completo del doucmento html
        let sizeVP = document.documentElement.clientHeight;//Altura de pantalla

        if(scroll > 100){//Cuando el scroll sea mayor a 100 px
            btnTop.classList.add("show");
        }else{
            btnTop.classList.remove("show");
        }

        //Modificar elemento cuando llegue a final de pagina
        if(fullSize==(scroll+sizeVP)){
            btnTop.classList.add("scrollFinal");
        }else{
            btnTop.classList.remove("scrollFinal");
        }
    });

    //Click en el boton
    btnTop.addEventListener("click",()=>{
        window.scrollTo(0,0);//Lleva a la parte superior
    });

    //Detectra evento click en el logo
    logo.addEventListener("click",()=>{
        window.scrollTo(0,0);
    });
});