import styleNav from "../styles/nav.module.css";
import { useDispatch } from "react-redux";
import React , { useState } from "react";
import * as actions from "../redux/actions.js";
import {Link , NavLink} from "react-router-dom"
export default function Nav () {
	const [id , setID] = useState()
	const dispatch = useDispatch()
	

	function setValue (event) {
		setID(event.target.value)
	}
	
	function handleChange () {
		dispatch(actions.AddCharacter(id))
	}
	
			return (
			<div className={styleNav.nav}> 
				<img src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty-500x281.png" alt="" width="280px"/>
				<input type="search" placeholder="1 - 826" onChange={setValue}/>
				<button onClick={handleChange} className={styleNav.addButton}>Add</button>
			</div>
	)
}







