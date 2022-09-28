let ranaMal= document.getElementById("rana-mal");
let bocaCerrada= document.getElementById("boca-cerrada");
let bocaAbierta= document.getElementById("boca-abierta");

ranaMal.style.display='none';
bocaAbierta.style.display='none';
 

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
    id:"arana",
    vida: -1
},
{
    id:"mariposa",
    vida: 11
}
];

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);

    bocaAbierta.style.display='block';
     
};

const allowDrop = (ev) => {
    ev.preventDefault();
};

const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");

    let bichoS = bichos.find(bicho => {
        return bicho.id == data

    });
    

    vidaTotal += bichoS.vida;

    numeroVida.innerHTML = `${vidaTotal}`;

    bocaAbierta.style.display='none';
    muerte();
};

const pulsador = () => {
    vidaTotal = 0;
    numeroVida.innerHTML = `${vidaTotal}`;
    ranaMal.style.display='none';
};



function muerte() {
    
    if (vidaTotal<=0){
     ranaMal.style.display='block'
     console.log("la rana ha muerto")
    }else{
        bocaCerrada.style.display='block'
    }

}
