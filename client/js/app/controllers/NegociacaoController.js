class NegociacaoController {
	constructor() {
		let $ = document.querySelector.bind(document);

		this._inputData = $('#data');
		this._inputQuantidade =  $('#quantidade');
		this._inputValor = $('#valor');

		let self = this;

		this._listaNegociacoes = new Bind(
			new ListaNegociacoes(),
			new NegociacoesView($('#negociacoesView')),
			'adiciona','esvazia'
		);

		this._mensagem = new Bind(
			new Mensagem(),
			new MensagemView($('#mensagemView')),
			'texto'
		);
	}

	adiciona(event) {
		event.preventDefault();

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._limpaFormulario();
		this._mensagem.texto = "Negociação adicionada com sucesso!";
	}

	apaga(){
		this._listaNegociacoes.esvazia();
		this._mensagem.texto = 'Negociações apagadas com sucesso';
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