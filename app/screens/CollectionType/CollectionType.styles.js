import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	cardContainer: {
		flexDirection: 'row',
		width: 351,
		height: 78,
		borderRadius: 8,
		backgroundColor: '#F5F5F5',
	},
	icon: {
		flex: 1,
	},
	content: {
		alignSelf: 'center',
		flex: 5,
		height: 54,
	},
	title: {
		fontSize: 16,
		color: '#000000',
	},
	text: {
		fontSize: 13,
		color: '#6D7885',
	},
	arrow: {
		flex: 1,
	},
});

export default styles;
