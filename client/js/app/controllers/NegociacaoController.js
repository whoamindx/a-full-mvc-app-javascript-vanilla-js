class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);

		this._inputData = $('#data');
		this._inputQuantidade =  $('#quantidade');
		this._inputValor = $('#valor');

		let self = this;

		this._listaNegociacoes = new Bind(
			new ListaNegociacoes()
		);
		
		ProxyFactory.create(
			new ListaNegociacoes(),
			['adiciona', 'esvazia'],
			(model) => self._negociacaoView.render(model)
		);

		this._negociacaoView = new NegociacaoView($('#negociacoesView'));

		this._mensagem = ProxyFactory.create(
			new Mensagem(),
			['texto'],
			(model) => self._mensagemView.render(model)
		);
		
		this._mensagemView = new MensagemView($('#mensagemView'));
		this._mensagemView.render(this._mensagem);
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