class Bind{
	constructor(model, view, ...props){
		let proxy = ProxyFactory.create(
			model,
			props,
			model => view.render(model)
		);
		view.render(model);
    return proxy;
	}
}