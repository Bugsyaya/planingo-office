import React from 'react'
import IntlProvider from './Tools/translation/IntlProvider'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider as ReduxProvider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Account from './Account/Account'
import Application from './Application/Application'
import configureStore from './Tools/store/store'
import { ApolloProvider } from '@apollo/client'
import { hogwarts } from './Tools/Clients/graphql'
import * as selectors from './Account/store/selectors'
import frFR from 'antd/lib/locale/fr_FR'
import { ConfigProvider } from 'antd'
import './App.less'

const { store, persistor } = configureStore()

const App = () => {
	return (
		<ConfigProvider locale={frFR}>
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<IntlProvider>
						<ApolloProvider client={hogwarts}>
							<Routes />
						</ApolloProvider>
					</IntlProvider>
				</PersistGate>
			</ReduxProvider>
		</ConfigProvider>
	)
}

function Routes() {
	const isAuthenticated = useSelector(selectors.isAuthenticated)
	return (
		<Router>
			<Switch>
				<Route basename="/auth" path="/auth">
					<Account />
				</Route>
				{!isAuthenticated && <Redirect to="/auth/login" />}
				<Route path="/">
					<Application />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
