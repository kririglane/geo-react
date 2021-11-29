import './App.css';
import GeoTag from './GeoTag';
import React, { Component } from "react"

class App extends Component {
	constructor() {
		super()
		const initState = (name) => {
			return {
				name: name,
				isCold: false,
				isElectricity: false,
				isHeating: false,
				isGas: false,
				isHot: false,
			}
		}

		this.state = {
			tags: [initState('Tag1'), initState('Tag2'), initState('Tag3'), initState('Tag4')],
			selected: 0
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		const { name, checked } = event.target

		const newTags = this.state.tags.slice()
		newTags[this.state.selected][name] = checked
		this.setState({ tags: newTags })
		console.log(newTags)
	}

	handleClick(index, event) {
		//console.log('Selected: ' + index)
		this.setState({
			selected: index
		})
	}

	render() {
		return (
			<div className="App">
				<section className="round">
					<div className="title title-n">
						Вариант геометки №1
					</div>
					<input id="cold" name="isCold" onChange={this.handleChange} checked={this.state.tags[this.state.selected].isCold} type="checkbox" className="custom" />
					<label htmlFor="cold">Отключение холодного водоснабжения</label>
					<input id="hot" name="isHot" onChange={this.handleChange} checked={this.state.tags[this.state.selected].isHot} type="checkbox" className="custom" />
					<label htmlFor="hot">Отключение горячего водоснабжения</label>
					<input id="gas" name="isGas" onChange={this.handleChange} checked={this.state.tags[this.state.selected].isGas} type="checkbox" className="custom" />
					<label htmlFor="gas">Отключение газа</label>
					<input id="electricity" name="isElectricity" onChange={this.handleChange} checked={this.state.tags[this.state.selected].isElectricity} type="checkbox" className="custom" />
					<label htmlFor="electricity">Отключение электричества</label>
					<input id="heating" name="isHeating" onChange={this.handleChange} checked={this.state.tags[this.state.selected].isHeating} type="checkbox" className="custom" />
					<label htmlFor="heating">Отключение отопления</label>

					{
						this.state.tags.map((obj, index) => {
							return (
								<GeoTag
									key={obj.name}
									isCold={obj.isCold}
									isElectricity={obj.isElectricity}
									isHeating={obj.isHeating}
									isGas={obj.isGas}
									isHot={obj.isHot}
									onClick={this.handleClick.bind(this, index)}
								/>
							)
						})
					}
				</section></div>
		)
	}

}


export default App;
