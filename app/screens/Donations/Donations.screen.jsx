import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

//sryles
import styles from './Donations.styles';

//nav
import { useNavigation } from '@react-navigation/native';

const Donations = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.paragraph}>
					У Вас пока нет сборов. Начните доброе дело.
				</Text>

				<TouchableOpacity
					style={[styles.button, { marginTop: 24 }]}
					onPress={() => navigation.navigate('root/collectionType')}
				>
					<Text style={styles.textButton}>Создать сбор</Text>
				</TouchableOpacity>

			</View>
		</View>
	);
};

export default Donations;
