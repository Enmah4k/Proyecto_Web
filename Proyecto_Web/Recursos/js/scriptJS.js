function numero_aleatorio(superior, inferior)
{ 
    var numPosibilidades = (superior + 1) - inferior; 
    var aleat = Math.random() * numPosibilidades; 
    aleat = Math.floor(aleat); 
    aleat = (inferior + aleat); 
    return aleat 
}

function color_aleatorio()
{ 
    color_aleat = "#" 
    hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F") 
    var inferior = 0; 
    var superior = hexadecimal.length-1; 
    for (i = 0; i < 6; i++){ 
        color_aleat += hexadecimal[numero_aleatorio(superior, inferior)]; 
    }
    return color_aleat 
}

function cambiar_todo()
{
    document.bgColor = color_aleatorio();
}


var nGuardado = 2;

function primo(n) 
{  
    for(var a = 2; a < nGuardado; a++)
    {
        if(nGuardado % a == 0)
        {
            nGuardado++;
            a = 2;
        }
    }
    
    n.value = nGuardado;
    nGuardado++;
}

function tituloTimer()
{
    setInterval('cambiarTitulo()',500)
}

var tituloG = "Enmanuel ";

function cambiarTitulo()
{
    var cadena = tituloG.length;
    var nTitulo = "";
    for (var a = 1; a < cadena; a++)
        {
            nTitulo += tituloG[a];
        }
    nTitulo += tituloG[0];
    tituloG = nTitulo;
    document.getElementById("titulo").innerHTML = nTitulo;
    document.title = nTitulo;
    
}

var input = document.getElementsByClassName('formulario-input');
for (var i = 0; i < input.length; i++)
{
    input[i].addEventListener('keyup', function(){
        if (this.value.length >= 1) 
        {
            this.nextElementSibling.classList.add('fijar');
        } 
        else 
        {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}


function formulario()
{
    var nombre = document.getElementById("inp-nombre").value;
    var edad = document.getElementById("inp-edad").value;
    var color = document.getElementById("inp-color").value;
    if (nombre != "" && edad != "")
    {
        alert("Mi nombre es "+nombre+", tengo "+edad+" años y me gusta el "+color);
    }
    
}
