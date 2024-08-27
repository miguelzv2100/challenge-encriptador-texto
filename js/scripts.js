const  ingresoTexto =document.getElementById("ingresoTexto");
const  botonEncriptar =document.getElementById("botonEncriptar");
const  botonDesencriptar =document.getElementById("botonDesencriptar");
const  botonCopiar =document.getElementById("botonCopiar");
const  mensajeFinal =document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const derechaInfo = document.getElementById("derechaInfo");

let reemplazar=[
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
];

botonEncriptar.addEventListener("click",() =>{
    const texto = ingresoTexto.value.toLowerCase();

    function encriptar(newText){
        for(let i=0;i<reemplazar.length;i++){
            if(newText.includes(reemplazar[i][0])){
                newText=newText.replaceAll(reemplazar[i][0],reemplazar[i][1]);
            }
        }
        return newText;
    }

    const textoEncriptado = encriptar(texto);

    mensajeFinal.innerHTML = textoEncriptado;

    muneco.style.display = "none";
    derechaInfo.style.display = "none";
    botonCopiar.style.display= "block"
    mensajeFinal.classList.add("ajustar");
    
    console.log(textoEncriptado);
    
    ingresoTexto.value="";
});

botonDesencriptar.addEventListener("click",() =>{
    const texto = ingresoTexto.value.toLowerCase();

    function desencriptar(newText){
        for(let i=0;i<reemplazar.length;i++){
            if(newText.includes(reemplazar[i][1])){
                newText = newText.replaceAll(reemplazar[i][1],reemplazar[i][0]);
            }
        };
        return newText;
    }

    const textoDesencriptado = desencriptar(texto);
    mensajeFinal.innerHTML = textoDesencriptado;
});

botonCopiar.addEventListener("click",() =>{
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy');
})