import React , {Component} from "react"
import {connect } from "react-redux"
import Card from "./Card.jsx"
import styleCards from "../styles/cards.module.css"

export class Cards extends Component {
	
	render() {
		return (
			<div className={styleCards.cards}>
			
				{this.props.characters.map((character) => (
					<Card
						name={character.name}
						image={character.image}
						id={character.id}
						/>
				))}
			</div>	


		)
			

		

	}

}

export const mapStateToProps = (state) => {
	return {characters: state.allCharacters, count: state.count}
}

export default connect(mapStateToProps, null)(Cards)

