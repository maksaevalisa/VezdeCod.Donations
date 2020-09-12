import React, { useState } from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native';

//styles
import styles from './RegularCollection.styles';

//nav
import { useNavigation } from '@react-navigation/native';

const ContentRow = ({
	text,
	placeholder,
}) => {
	return (
		<View style={styles.contentContainer}>
			<Text style={styles.text}>{text}</Text>

			<TextInput
				style={styles.textInput}
				placeholder={placeholder} />
		</View>
	);
};

const RegularCollection = () => {
	const [selectedValue, setSelectedValue] = useState('firstPicker');

	const navigation = useNavigation();

	return (
		<ScrollView style={styles.container}>
			<View style={styles.photoContainer} >
				<Text style={{ fontSize: 16, color: '#3F8AE0' }}>Загрузите обложку</Text>
			</View>

			<ContentRow
				text='Название сбора'
				placeholder='Название сбора' />

			<ContentRow
				text='Сумма, ₽'
				placeholder='Сколько нужно собрать?' />

			<ContentRow
				text='Цель'
				placeholder='Например, лечение человека' />

			<ContentRow
				text='Описание'
				placeholder='На что пойдут деньги и как они кому-то помогут?' />

			<View style={styles.pickerContainer}>
				<Text style={styles.text}>Куда получать деньги</Text>

				<Picker
					selectedValue={selectedValue}
					style={styles.picker}
					onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
				>
					<Picker.Item label='Счёт VK Pay · 1234' value='firstPicker' />
					<Picker.Item label='Добавить карту' value='secondPicker' />
				</Picker>
			</View>

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

			<View style={{ paddingBottom: 12 }}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('root/snippet')}
				>
					<Text style={{ fontSize: 17, color: '#ffffff' }}>Далее</Text>
				</TouchableOpacity>
			</View>

		</ScrollView>
	);
};

export default RegularCollection;
