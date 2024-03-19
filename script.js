const campo_texto = document.querySelector("#Text-encriptado");
const campo_mensaje = document.querySelector("#area-mensaje");

const matriz_code = [
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"],
    ["a","ai"],
];

function btnencriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_mensaje.style.backgroundImage = "none";
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if (fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
}
 
function btndesencriptar(){
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_mensaje.style.backgroundImage = "none";
}

function desencriptar(fraseDesencriptada){
    for(let i = 1; i < matriz_code.length; i++){
        if (fraseDesencriptada.includes(matriz_code[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseDesencriptada;
}

function copiartexto(){
    let copiar=document.getElementById('area-mensaje');
    copiar.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
    document.getElementById("Text-encriptado").value="";
    document.getElementById("area-mensaje").value="";
    area-mensaje.setAttribute("hidden", "");
    copiar.setAttribute("hidden", "");
}
