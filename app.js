

const apiUrl = "http://localhost/app.php.js.yes.no.senati/api.php";
const apiUrlYesNo = "https://yesno.wtf/api";



async function getData() {
    console.log("ingreso a get data");
    try {
     const respuesta = await fetch(
      `${apiUrl}?id=123&nombre=alex&apellido=ninaja`,
      {
       method: "GET",
      }
     );
     const data = await respuesta.json();
     console.log("data");
     console.log(data);
    } catch (error) {
     console.log("Error al momento de hacer la peticion GET: ", error);
    }
   }
   
   let botonGet = document.querySelector("#get-data");
   botonGet.addEventListener("click", function () {
    getData();
   });
   
   async function postData() {
    try {
     const respuesta = await fetch(apiUrl, {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
      },
      body: JSON.stringify({
       nombre: "alex",
       apellido: "ninaja",
       lenguaje_favorito: "JavaScript",
       color: "Plomo",
      }),
     });
   
     const data_retorno = await respuesta.json();
     console.log(data_retorno);
    } catch (error) {
     console.log("Error al momento de hacer la peticion POST: ", error);
    }
   }
    
   let botonPost = document.querySelector("#post-data");
   botonPost.addEventListener("click", function () {
    postData();
   });
   
   async function getYesNoData() {
    try {
     const respuesta = await fetch(apiUrlYesNo, {
      method: "GET",
     });
     const data = await respuesta.json();
     console.log("aqui llega el mensage");
     
     console.log(data.answer );
     agregarMensaje(data.answer,false,data.image);

    } catch (error) {
     console.log("Error al momento de hacer la peticion GET: ", error);
    }
   }
        
   let botonGetYesNo = document.querySelector("#yes-no-data");
   botonGetYesNo.addEventListener("click", function () {
    getYesNoData();
   });
   
   
   async function putData() {
    try {
     const respuesta = await fetch(apiUrl, {
      method: "PUT",
      headers: {
       "Content-Type": "application/json",
      },
      body: JSON.stringify({
       nombre: "alex",
       apellido: "ninaja",
       lenguaje_favorito: "JavaScript",
       color: "Plomo",
      }),
     });
   
     const text = await respuesta.text();
     console.log("Respuesta del servidor:", text);
     const data_retorno = JSON.parse(text);
     console.log(data_retorno);
    } catch (error) {
     console.log("Error al momento de hacer la peticion PUT: ", error);
    }
   }
   let botonPut = document.querySelector("#put-data");
   botonPut.addEventListener("click", function () {
    putData();
   });
   
   
   
   async function deleteData() {
    try {
     const respuesta = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
       "Content-Type": "application/json",
      },
      body: JSON.stringify({
       nombre: "alex",
       apellido: "ninaja",
       lenguaje_favorito: "JavaScript",
       color: "Plomo",
      }),
     });
   
     const text = await respuesta.text();
     console.log("Respuesta del servidor:", text);
     const data_retorno = JSON.parse(text);
     console.log(data_retorno);
    } catch (error) {
     console.log("Error al momento de hacer la peticion DELETE: ", error);
    }
   
   }
   
   
   let botonDelete = document.querySelector("#delete-data");
   botonDelete.addEventListener("click", function () {
    deleteData();
   });
   
   
   
   

//FUNCIONALIDAD DEL CHAT YES, NO

let chatMessages = document.getElementById('chatMessages');
let chatForm = document.getElementById('chatForm');
let messagesInput=document.getElementById('messagesInput');

function agregarMensaje(mensaje, soyYo = true, imagen = null) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.classList.add('message');
    mensajeDiv.classList.add(soyYo ? 'user-message' : 'api-message');
    mensajeDiv.textContent = mensaje;

    chatMessages.appendChild(mensajeDiv);
    

    if(imagen){
        const img = document.createElement('img');
        img.src = imagen;
        mensajeDiv.appendChild(img);
    
    }
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight
    }, 500);
    
 
}
chatForm.addEventListener('submit',function(e){
e.preventDefault();
    const miMensaje = messagesInput.value;
    agregarMensaje("miMensaje",true,);
    getYesNoData();
})

//agregarMensaje("hola soy alex ", true);
//agregarMensaje("hola soy la api",false);