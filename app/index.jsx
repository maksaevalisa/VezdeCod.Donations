import React from 'react';
import { StatusBar } from 'react-native';

//nav
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './screens/RootNavigation.navigate';

import Main from './Main';

function App() {
	return (
		<NavigationContainer>

			<StatusBar
				backgroundColor='#ffffff'
				barStyle='dark-content' />

			<RootNavigation />
		</NavigationContainer>
	);
}
export default App;

