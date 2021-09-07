import React from 'react'
import './navigation.scss'
import { NavLink } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Menu } from 'antd'
import {
	ApiOutlined,
	BankOutlined,
	BgColorsOutlined,
	SettingOutlined,
} from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { selectors } from '../../Account/store'
import { Spin, Tooltip } from '@planingo/ditto'
import { useAccountById } from '../../Tools/MagicBook/Account/account.hooks'

const { SubMenu } = Menu;

const Navigation = () => {
	const intl = useIntl()

	const userId = useSelector(selectors.accountId)
	const {email, loadingAccount} = useAccountById(userId)


	if (loadingAccount)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	const pathways = [
		{
			key: 'constraint',
			to: '/constraint',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.constraint' })}>
				<ApiOutlined />
			</Tooltip>
		},
		{
			key: 'school',
			to: '/school',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.school' })}>
				<BankOutlined />
			</Tooltip>
		},
		{
			key: 'functionality-global',
			to: '/functionality-global',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.functionality-global' })}>
				<BgColorsOutlined />
			</Tooltip>
		},
		{
			key: 'setting',
			to: '/settings',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.settings' })}>
				<SettingOutlined />
			</Tooltip>
		}
	]

	function handleClick(e) {
	}
	
	return (
		<div className="navigation">
			<div className="top">
				<div className="logo">
				<Menu onClick={handleClick} mode="vertical" triggerSubMenuAction="click">
					<SubMenu key="sub1" title={<img
							alt="profil"
							src={`https://avatars.bugsyaya.dev/50/${userId}`}
						/>}>
						<Menu.Item key="1">{email}</Menu.Item>
						<Menu.Item key="2">
							<p>
								Mon compte
							</p>
						</Menu.Item>
						<Menu.Item key="3">Déconnexion</Menu.Item>
					</SubMenu>		
				</Menu>
				</div>
				<div className="main">
					{
						pathways.map(({key, to, message}) => (
							<NavLink key={key} activeClassName='active' to={to} className="pointer">
								{message}
							</NavLink>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Navigation
