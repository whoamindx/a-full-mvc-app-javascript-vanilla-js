class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);

		this._inputData = $('#data');
		this._inputQuantidade =  $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNegociacoes();

		this._negociacaoView = new NegociacaoView($('#negociacoesView'));
		this._negociacaoView.render(this._listaNegociacoes);
	}

	adiciona(event) {
		event.preventDefault();

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._limpaFormulario();

		this._negociacaoView.render(this._listaNegociacoes);

	}

	_criaNegociacao(){
		let data = DateHelper.textoParaData(this._inputData.value);

		return new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	_limpaFormulario(){
		this._inputData.parentElement.parentElement.reset();
		this._inputData.focus();
	}
}