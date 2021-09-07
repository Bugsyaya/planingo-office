import React from 'react'
import packageJson from '../../../package.json';

export const Footer = () => {
	return <div className="footer">Planin'go office - version {packageJson.version}</div>
}