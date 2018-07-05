// Primeiro pegamos os valores do campos do form que será submetidos
let campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
]

// Pegamos a parte da tabela que irá redenrizar os dados vindo da tabela
let tbody = document.querySelector('table tbody');

// Qunado for submetidos, iremos jogar os dados do form na table
document.querySelector('.form').addEventListener('submit', function(event){

	// Evitar carregamento da página
	event.preventDefault();

	// Criamos um tr para ser embutido na table mais tarde
	let tr = document.createElement('tr');

	// Agora inserimos os valores do form na table
	campos.forEach(function(campo){

		// Criamos um td que receberar o valor do campo
		let td = document.createElement('td');
		td.textContent = campo.value;

		// Setamos ele no tr que um pouco mais abaixo será setado no corpo da table
		tr.appendChild(td);
	});

	// Criamos avulsamemte mais um td que será o volume
	let tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value * campos[2].value;

	// Tabém setamos ele no tr
	tr.appendChild(tdVolume);

	// E por fim setamos ele na table
	tbody.appendChild(tr);
});