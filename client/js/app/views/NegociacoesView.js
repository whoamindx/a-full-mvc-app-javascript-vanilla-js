class NegociacaoView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            </tbody>
                ${model.negociacoes.map(n =>`
                        
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>

                    `).join('')}
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>
                        ${ model.negociacoes.reduce((total, n) => total+n.volume, 0) }
                    </td>
                </tr>
            </tfoot>
        </table>`
    }

    render(model){
        this._elemento.innerHTML = this._template(model);
    }
}