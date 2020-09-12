import React from 'react';
import { TouchableOpacity } from 'react-native';

//nav
import { useNavigation } from '@react-navigation/native';

const Main = () => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			style={{ flex: 1, width: '100%' }}
			onPress={() => navigation.navigate('root/targetCollection')} />
	);
};

export default Main;
