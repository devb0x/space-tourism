import React, { Fragment } from "react"

import Head from "next/head"
import Technology from "../../components/Technology"

function TechnologyPage() {

	return (
		<Fragment>
			<Head>
				<title>Learn about the technology</title>
				<meta
					name="description"
					content="The terminology.."
				/>
			</Head>
			<Technology />
		</Fragment>
	)
}

export default TechnologyPage