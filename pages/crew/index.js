import React, { Fragment } from "react"
import Head from "next/head"

import Crew from "../../components/Crew"

function CrewPage() {

	return (
		<Fragment>
			<Head>
				<title>Meet your Crew</title>
				<meta
					name="description"
					content="Meet the members of your crew."
				/>
			</Head>
			<Crew />
		</Fragment>
	)
}

export default CrewPage