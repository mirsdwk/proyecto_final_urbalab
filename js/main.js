let bocaCerrada= document.getElementById("boca-cerrada");
let bocaAbierta= document.getElementById("boca-abierta");


bocaAbierta.style.display='none';
/* bocaAbierta.style.display='block'; */ 

let numeroVida = document.getElementById("numeroVida");
let vidaTotal = 0;
numeroVida.innerHTML = `${vidaTotal}`;

let bichos =[
{
    id: "avispa",
    vida: -10
},

{
    id: "mosca",
    vida: 1
    
},
{
    id: "escarab",
    vida: 3
},
{
    id:"mariquita",
    vida: 6
},

{
    id:"garrapata",
    vida: -5
},

{
    id:"libelula",
    vida: 5
},

{
    id:"escarabajo",
    vida: 4
},
{
    id:"araña",
    vida: -1
},
{
    id:"mariposa",
    vida: 11
}
];

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);

    // console.log("arrastrando...", ev.target.id);
};
 
