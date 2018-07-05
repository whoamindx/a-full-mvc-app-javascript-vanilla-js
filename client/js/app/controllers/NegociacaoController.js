class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);

		this._inputData = $('#data');
		this._inputQuantidade =  $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona(event) {
		event.preventDefault();

		let data = this._inputData.value;

		data = new Date(data.split('-'));

		let negociacao = new Negociacao(
				data,
				this._inputQuantidade.value,
				this._inputValor.value
			);

		console.log(negociacao);

	}
}