const propiedadesJSON = [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rocuartosoms: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
    }
  ]

function templateDepartamento(departamento){
  return `
  <div class="propiedad">
<div class="img" style="background-image: url('${departamento.src}')"></div>
<section>
    <h5>${departamento.nombre}</h5>
    <div class="d-flex justify-content-between">
        <p>Cuartos: ${departamento.cuartos}</p>
        <p>Metros: ${departamento.metros}</p>
    </div>
    <p class="my-3">${departamento.descripcion}</p>
    <button class="btn btn-info ">Ver más</button>
</section> 
</div>
`;
}




function buscador(){

const buscacuartos = document.querySelector("#incuartos").value;
const metrosmin = document.querySelector("#metrosmin").value;
const metrosmax = document.querySelector("#metrosmax").value;

if (buscacuartos<= 0 || buscacuartos === "" ){
alert("falta poner cuartos");} 
if (metrosmin<= 0 || metrosmin === "") {
alert("falta poner metros mínimos");}
if (metrosmax<= 0 || metrosmax === "" ) {
alert("falta poner metros máximos");}



let html = "";
let contadorDepa = 0;
for (const departamento of propiedadesJSON){
  if (departamento.cuartos >= buscacuartos && ( departamento.metros >= metrosmin && departamento.metros <= metrosmax )){
  html += templateDepartamento(departamento);}
  contadorDepa += 1 ;
}
const totaldepropiedades = document.getElementsByClassName("propiedades")[0];
totaldepropiedades.innerHTML = html;
}



function cargainicial(totaldepropiedades){

  let html = "";
  for (const inicial of propiedadesJSON){
    html += templateDepartamento(inicial);
  }

  totaldepropiedades.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', (event) => {
 
  const totaldepropiedades = document.getElementsByClassName("propiedades")[0];
  const boton = document.querySelector('#boton');

  boton.addEventListener("click", buscador);
  cargainicial(totaldepropiedades);
});


/* 
let div1 = document.getElementById("galeria");

for (let i of propiedadesJSON){
  let newp = document.createElement("p");
  let newimg = document.createElement("img");
  let newtitle = document.createElement("h5");
  console.log(i);
  newtitle.innerHTML= i.name;
  newimg.innerHTML= i.src;
  newp.innerHTML = newp.innerHTML + "Nombre: " + i.nombre + " - edad: " + i.edad + " - Nac: " + i.nacionalidad;
  div1.appendChild(newtitle);
  div1.appendChild(newp);
  div1.appendChild(newimg);

} */

