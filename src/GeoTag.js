
import React, { Component } from 'react'

export default function GeoTag(props) {
	const isCold = props.isCold
	const isElectricity = props.isElectricity
	const isHeating = props.isHeating
	const isGas = props.isGas
	const isHot = props.isHot
	const onClick = props.onClick


	return (
		<div className="geo geo-round" onClick={onClick}>
			<img id="location-round" className="location-round" src="./image/geo.svg" alt data-zkh />

			{isCold && (<img id="geo-cold" className="round-img round-cold geo-img" src="./image/cold.svg" alt />)}
			{isElectricity && (<img id="geo-electricity" className="round-img round-electricity geo-img" src="./image/electricity.svg" alt />)}
			{isHeating && (<img src="./image/battery.svg" id="geo-heating" className="round-img round-heating geo-img" alt />)}
			{isGas && (<img id="geo-gas" className="round-img round-gas geo-img" src="./image/gas.svg" />)}
			{isHot && (<img id="geo-hot" className="round-img round-hot geo-img" src="./image/hot.svg" alt />)}
		</div>
	)
}
