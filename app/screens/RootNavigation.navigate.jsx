import React from 'react';

//screens
import Donations from './Donations/Donations.screen';
import TargetCollection from './TargetCollection/TargetCollection.screen';
import CollectionType from './CollectionType/CollectionType.screen';
import RegularCollection from './RegularCollection/RegularCollection.screen';
import Snippet from './Snippet/Snippet.screen';

import Main from '../Main';

//nav
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootNavigation = () => (
	<Stack.Navigator initialRouteName='root/donations'>

		<Stack.Screen
			name='root/main'
			component={Main}
			options={{
				headerShown: true,
				headerTitleAlign: 'center',
				title: 'Пожертвования',
			}} />

		<Stack.Screen
			name='root/donations'
			component={Donations}
			options={{
				headerShown: true,
				headerTitleAlign: 'center',
				title: 'Пожертвования',
			}} />

		<Stack.Screen
			name='root/collectionType'
			component={CollectionType}
			options={{
				headerShown: true,
				headerTitleAlign: 'center',
				title: 'Тип сбора',
			}} />

		<Stack.Screen
			name='root/targetCollection'
			component={TargetCollection}
			options={{
				headerShown: true,
				headerTitleAlign: 'center',
				title: 'Целевой сбор',
			}} />

		<Stack.Screen
			name='root/regularCollection'
			component={RegularCollection}
			options={{
				headerShown: true,
				headerTitleAlign: 'center',
				title: 'Регулярный сбор',
			}} />

		<Stack.Screen
			name='root/snippet'
			component={Snippet}
			options={{
				headerShown: false,
			}} />

	</Stack.Navigator>
);

export default RootNavigation;
