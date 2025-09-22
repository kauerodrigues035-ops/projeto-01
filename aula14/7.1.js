
document.getElementById("formtabuada").addEventListener("submit", function(event){

event.preventDefault();

const numero = parseInt(document.getElementById("numero").value);
const resultadoDiv = document.getElementById("resultado")


if(isNaN(numero)){
resultadoDiv.innerHTML = "<p>Por favor, insira um número valido</p>";return;
};

let tabuadaHTML = `<h3> tabuada do ${numero}</h3>`;
for (let i = 1;i <=10 ; i++){

tabuadaHTML+= `<li> ${numero} x ${i} = ${numero * i} </li>`;

};

tabuadaHTML += `</ul>`
resultadoDiv.innerHTML = tabuadaHTML;

});
