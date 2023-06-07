//Variables
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

//Funciones
function validar_texto(){
    let texto_escrito = document.querySelector(".text-area").value;
    let validador = texto_escrito.match(/^[a-z]*$/); //Expresion regular, para validar que sean letras solamente

    if(!validador || validador === 0){
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

//Encriptado
function encriptar(string_encriptada){
    let matriz_codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    string_encriptada = string_encriptada.toLowerCase()

    for(let i = 0;i< matriz_codigo.length;i++){
        if(string_encriptada.includes(matriz_codigo[i][0])){
            string_encriptada = string_encriptada.replaceAll(matriz_codigo[i][0],matriz_codigo[i][1])
        }
    }

    return string_encriptada
}

function btn_encriptar(){
    if(!validar_texto()){
        const texto_encriptado = encriptar(textArea.value);
        mensaje.value = texto_encriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
    }
}

//Desencriptado
function desencriptar(string_desencriptada){
    let matriz_codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    string_desencriptada = string_desencriptada.toLowerCase()

    for(let i = 0;i< matriz_codigo.length;i++){
        if(string_desencriptada.includes(matriz_codigo[i][1])){
            string_desencriptada = string_desencriptada.replaceAll(matriz_codigo[i][1],matriz_codigo[i][0])
        }
    }

    return string_desencriptada
}

function btn_desencriptar(){
    const texto_encriptado = desencriptar(textArea.value);
    mensaje.value = texto_encriptado;
    textArea.value = "";
}


