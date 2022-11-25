import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton/StyledButton";

const CartItem = ({ name, tagline, taglineCTA, image }) => {
	return (
		<View style={styles.cartContainer}>
			<ImageBackground source={image} style={styles.image} />
			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subTitle}>
					{tagline} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<StyledButton type="primary" content="custom order" onPress={() => {}} />
				<StyledButton
					type="secundary"
					content="existing invertory"
					onPress={() => {}}
				/>
			</View>
		</View>
	);
};

export default CartItem;
