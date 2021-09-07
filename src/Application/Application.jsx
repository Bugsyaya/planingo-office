import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './application.scss'
import Navigation from './Navigation/Navigation'
import Constraints from './Constraints/Constraints'
import {Schools} from './Schools/Schools'
import { Fonctionnality } from './Fonctionnality/Fonctionnality'
import { Footer } from './Footer/Footer'

const Application = () => {

	return (
		<div className="application">
			<Navigation />
			<div className="body">
				<div className="middle">
					<Switch>
						<Route path="/constraint">
							<Constraints />
						</Route>
						<Route path="/school">
							<Schools />
						</Route>
						<Route path="/scope-global">
							<Fonctionnality />
						</Route>
					</Switch>
					<Footer/>
				</div>
			</div>
		</div>
	)
}

export default Application
