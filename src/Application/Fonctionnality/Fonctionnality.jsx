import React from 'react'
import Global from './Global/Global'
import Scopes from './Scopes/Scopes'

export const Fonctionnality = () => {
	return (
		<div className="settings">
			<div className="card-container">
				<Scopes />
				<Global />
			</div>
		</div>
	)
}
