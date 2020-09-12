import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Snippet = () => {
	return (
		<View style={styles.container}>
			<View style={styles.snippetContainer}>
				<View style={styles.headerContainer}>
					<View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }} >
						<Image source={require('./Avatar.jpg')} style={styles.imageAvatar} />
					</View>

					<View style={{ flex: 5, marginLeft: 12 }}>
						<Text style={styles.headerText}>Матвей Правосудов</Text>
						<Text style={styles.timeHeaderText}>час назад</Text>
					</View>

					<View style={{ flex: 0.5 }} />
				</View>

				<View style={{ paddingLeft: 12, paddingRight: 12, justifyContent: 'center' }}>
					<Text style={styles.text}>Сейчас самое время помочь тем, кто не может попросить о помощи сам.</Text>

					<View style={styles.contentContainer}>
						<Image source={require('./Image.jpg')} style={styles.imageCenter} />

						<View style={{ width: '100%', paddingLeft: 12, paddingRight: 12, marginTop: 8 }}>
							<Text style={[styles.headerText, { color: '#000000' }]}>Добряши помогают котикам</Text>
							<Text style={[styles.timeHeaderText, { fontSize: 12, marginTop: 2 }]}>
								Матвей Правосудов · Закончится через 5 дней
							</Text>

							<View style={styles.buttonContainer}>
								<Image source={require('./Progress.jpg')} style={{ width: 290, height: 45 }} />

								<TouchableOpacity style={styles.button}>
									<Text style={{ color: '#3F8AE0', fontSize: 14 }}>Помочь</Text>
								</TouchableOpacity>
							</View>
						</View>

					</View>

				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	snippetContainer: {
		width: '100%',
		height: 410,
		backgroundColor: '#ffffff',
		borderWidth: 1,
		borderColor: '#EBEDF0',
	},
	contentContainer: {
		width: '100%',
		height: 246,
		marginTop: 12,
		backgroundColor: '#ffffff',
		borderRadius: 10,
		elevation: 2,
	},
	headerContainer: {
		flexDirection: 'row',
		width: '100%',
		height: 52,
		marginTop: 4,
		backgroundColor: '#ffffff',
	},
	headerText: {
		fontSize: 15,
		color: '#2C2D2E',
	},
	timeHeaderText: {
		fontSize: 12,
		color: '#818C99',
	},
	text: {
		width: '100%',
		height: 40,
		marginTop: 4,
		fontSize: 15,
		color: '#000000',
	},
	buttonContainer: {
		width: '100%',
		height: 54,
		marginTop: 7,
		borderTopWidth: 0.5,
		borderTopColor: '#D7D8D9',
		justifyContent: 'space-around',
		flexDirection: 'row',
		alignItems: 'center',
	},
	button: {
		width: 85,
		height: 30,
		borderWidth: 1,
		borderColor: '#3F8AE0',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	imageCenter: {
		width: '100%',
	},
	imageAvatar: {
		width: 48,
		height: 48,
	},
});

export default Snippet;
