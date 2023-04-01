import React , {Component} from "react"
import styleCard from "../styles/card.module.css"
import {useDispatch} from "react-redux"
import * as actions from "../redux/actions.js"
export default function Card (props) {	
	const dispatch = useDispatch();
		
		function Delete () {
			dispatch(actions.quitCharacter(props.id))
		}	
		
	return (
	
			<div className={styleCard.container}>
				<div className={styleCard.top}>
					<h4>{props.name}</h4>
					<button onClick={Delete}>x</button>
				</div>
				<div className={styleCard.bottom}>
					<img className={styleCard.image} src={props.image}/>
				</div>
			</div>
			)
	}








