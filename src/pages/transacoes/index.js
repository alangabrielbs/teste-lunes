import React, { Component } from 'react';
import './style.css';

export default class Transacoes extends Component {
	
	constructor(propis){
		super(propis);

		this.state = {
			moedaP:"BTC",
			adress:"",
			apiRes: [],
			go: "false"
			
		}

		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(event) {
		this.setState({moedaP: event.target.value});
	  }


	handleSubmit = (e) => {
	if(this.state.adress === ""){
		alert('Você tem que adicionar um endereço!')
		e.preventDefault()
	}else{
		const moeda = `https://chain.so/api/v2/get_tx_received/${this.state.moedaP}/${this.state.adress}`

		fetch(moeda)
		.then(res=>{
			return res.json()
		})
		.then(json=>{
			const historic = json.data.txs;
			this.setState({apiRes: historic, go: true})
			this.setState({go: "true"})
			console.log(this.state.go)
		})
	}	
}


	render(){
		return (
			<div className="box-transacoes">
				<h2>Historico de transações</h2>
					<select value={this.state.moedaP} onChange={this.handleChange}>
						<option value='BTC' className="btc">Bitcoin</option>
						<option value='LTC' className="ltc">Litecoin</option>
					</select>
					<input type="text" required placeholder="Ex.: 1Ma2DrB78K7jmAwaomqZNRMCvgQrNjE2QC" onChange={(event) => { this.setState({ adress: event.target.value }) }}></input>
					<input type="button" value="Buscar" onClick={this.handleSubmit}></input>
				
			
				
				<table>
					{(() => {
						if(this.state.go === "true"){
							return <Thead />
						}
					})()}
					{this.state.apiRes.map(el => (
					<tbody key={el.value}>
						<tr>
							<td key={el.value}>  {el.value} BTC</td>
							<td key={el.confirmations}>{el.confirmations}</td>
						</tr>
					</tbody>
					))}
				</table>	
			</div>
		);
	}
}

const Thead = () => (
	<thead>
		<tr>
			<td>Valor:</td>
			<td>Confirmação:</td>								
		</tr>
	</thead>
)