import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingLeft: 12,
		paddingRight: 12,
		backgroundColor: '#ffffff',
	},
	pikerContainer: {
		marginTop: 4,
		width: '100%',
		height: 140,
		borderWidth: 1,
		borderColor: '#3F8AE0',
		borderRadius: 8,
		borderStyle: 'dotted',
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentContainer: {
		width: '100%',
		height: 96,
	},
	text: {
		width: 200,
		marginTop: 12,
		fontSize: 14,
		color: '#6D7885',
	},
	textInput: {
		height: 44,
		width: '100%',
		marginTop: 8,
		backgroundColor: '#F2F3F5',
		borderRadius: 8,
		borderColor: '#00000016',
		borderWidth: 0.5,
		padding: 12,
	},
	pickerContainer: {
		width: '100%',
		height: 96,
	},
	picker: {
		height: 44,
		width: '100%',
		marginTop: 8,
		backgroundColor: 'red',
		borderRadius: 8,
		borderColor: '#000000',
		padding: 12,
		fontSize: 16,
	},
	button: {
		marginTop: 12,
		width: '100%',
		height: 44,
		backgroundColor: '#4986CC',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
});

export default styles;
