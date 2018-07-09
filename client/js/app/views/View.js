class View{

	constructor(elemento){
		this._elemento = elemento;
	}

	render(model){
		this._elemento.innerHTML = this._template(model);
	}
	
}