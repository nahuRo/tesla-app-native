import { View, FlatList, Text, Dimensions } from "react-native";
import React from "react";
import cars from "../../utils/cars";
import styles from "./styles";
import CartItem from "../CartItem/CartItem";

const CarsList = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <CartItem {...item} />}
				snapToAlignment="start"
				decelerationRate="fast"
				snapToEnd={Dimensions.get("window").height}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default CarsList;
