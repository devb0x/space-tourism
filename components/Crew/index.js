import React, { Fragment, useState } from "react"

import classes from './Crew.module.css'

import data from '../../data/data.json'
import MainTitle from "../layout/MainTitle"

const Crew = () => {
	const [crewMember, setCrewMember] = useState(data.crew[0])

	return (
		<Fragment>
			<div className={`${classes['crew-bg']}`}/>
			<div className={classes.crew}>
				<MainTitle number={"02"} title={"meet your crew"} />
				<img
					src={crewMember.images.png}
					alt={crewMember.name}
					className={classes.img}
				/>
				<div className={`${classes['img-stripe']}`}/>
				<div className={`${classes['dots-wrapper']}`}>
					{data.crew.map((el, index) => (
						<div
							id={index}
							role="button"
							key={index}
							className={
								el.name === crewMember.name ? `${classes['dot']} ${classes['active']}` : `${classes['dot']}`
							}
							onClick={
								() => {
									console.log(index)
									setCrewMember(data.crew[index])
								}
							}
						/>
					))}
				</div>
				<div className={`${classes['member-wrapper']}`}>
					<h3 className={`${classes['member-role']}`}>{crewMember.role}</h3>
					<div className={`${classes['member-name']}`}>{crewMember.name}</div>
					<p className={`${classes['member-bio']}`}>{crewMember.bio}</p>
				</div>
			</div>
		</Fragment>
	)
}

export default Crew