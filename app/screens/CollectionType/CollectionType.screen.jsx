import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

//styles
import styles from './CollectionType.styles';

//component
//import CardChoiseFees from '../../components/CardChoiseFees/CardChoiseFees.component';

//nav
import { useNavigation } from '@react-navigation/native';

const CollectionType = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container} >
			<View style={{ height: 180, justifyContent: 'space-around' }}>
				<TouchableOpacity
					style={styles.cardContainer}
					onPress={() => navigation.navigate('root/targetCollection')}
				>
					<View style={styles.icon} />

					<View style={styles.content}>
						<Text style={styles.title}>Целевой сбор</Text>
						<Text style={styles.text}>Когда есть определённая цель</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.cardContainer}
					onPress={() => navigation.navigate('root/regularCollection')}
				>
					<View style={styles.icon} />

					<View style={styles.content}>
						<Text style={styles.title}>Регулярный сбор</Text>
						<Text style={styles.text}>Если помощь нужна ежемесячно</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>

	);
};

export default CollectionType;

