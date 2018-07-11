class ProxyFactory{
	static create(objeto, props, acao){

		let self = this;

		return new Proxy(objeto, {
		    get(target, prop, receiver) {
		        if(props.includes(prop) && self._isFunction(target[prop])) {
		            return function(){
						console.log(`método '${prop}' interceptado`);
						Reflect.apply(target[prop], target, arguments);
						return acao(target);
		            }
		     }
		     return Reflect.get(target, prop, receiver);
		  },

		  set(target, prop, value, receiver){
		  	if (props.includes(prop)) {
		  		acao(target);
		  		target[prop] = value;
		  	};		  	
		  	return Reflect.set(target, prop, value, receiver);

		  }

		});

	}


	static _isFunction(func) {

	    return typeof(func) == typeof(Function);

	}


}