import React, { useState } from 'react';
import { Text, View, Picker } from 'react-native';

//styles
import styles from './Additionally.styles';

const Additionally = () => {
	const [selectedValue, setSelectedValue] = useState('firstPicker');

	return (
		<View style={styles.container}>

			<View style={styles.pickerContainer}>
				<Text style={styles.text}>Автор</Text>

				<Picker
					selectedValue={selectedValue}
					style={styles.picker}
					onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
				>
					<Picker.Item label='Матвей Правосудов' value='firstPicker' />
					<Picker.Item label='Иван Петров' value='secondPicker' />
					<Picker.Item label='Андрей Сидоров' value='thirdPicker' />
				</Picker>
			</View>

			<View style={styles.multipleChoiceContainer}>
				<Text style={styles.text}>Сбор завершится</Text>
			</View>

			<View style={styles.pickerContainer}>
				<Text style={styles.text}>Дата окончания</Text>

				<Picker
					selectedValue={selectedValue}
					style={[styles.picker, { color: '#818C99' }]}
					onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
				>
					<Picker.Item label='Выберите дату' value='firstPicker' />
					<Picker.Item label='1' value='secondPicker' />
					<Picker.Item label='2' value='thirdPicker' />
				</Picker>
			</View>

		</View>
	);
};

export default Additionally;
