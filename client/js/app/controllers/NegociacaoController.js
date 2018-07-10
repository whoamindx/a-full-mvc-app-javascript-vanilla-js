class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);

		this._inputData = $('#data');
		this._inputQuantidade =  $('#quantidade');
		this._inputValor = $('#valor');

		let self = this;
		
		this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {

		    get(target, prop, receiver) {

		        if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)) {

		            return function(){

						console.log(`método '${prop}' interceptado`);

						Reflect.apply(target[prop], target, arguments);

						self._negociacaoView.render(target);

		            }
		     }

		     return Reflect.get(target, prop, receiver);
		  }
		});

		this._negociacaoView = new NegociacaoView($('#negociacoesView'));
		this._negociacaoView.render(this._listaNegociacoes);

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
	}

	adiciona(event) {
		event.preventDefault();

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._limpaFormulario();

		// this._negociacaoView.render(this._listaNegociacoes);

		this._mensagem.texto = "Negociação adicionada com sucesso!";
		this._mensagemView.render(this._mensagem);

	}

	apaga(){
		this._listaNegociacoes.esvazia();
		// this._negociacaoView.render(this._listaNegociacoes);

		this._mensagem.texto = 'Negociações apagadas com sucesso';
		this._mensagemView.render(this._mensagem);
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