import React from "react"

import classes from './MainTitle.module.css'

const MainTitle = (props) => {
	return (
		<h1 className={`${classes['title']}`}>
			<span className={`${classes['number']}`}>{props.number}</span>
			{props.title}
		</h1>
	)
}

export default MainTitle