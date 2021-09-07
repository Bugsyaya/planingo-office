import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './application.scss'
import Navigation from './Navigation/Navigation'
import Settings from './Settings/Settings'

const Application = () => {

	return (
		<div className="application">
			<Navigation />
			<div className="body">
				<div className="middle">
					<Switch>
						<Route path="/settings">
							<Settings />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default Application
