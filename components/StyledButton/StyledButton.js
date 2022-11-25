import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = ({ type, content }) => {
	const myBackgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
	const textColor = type === "primary" ? "#fff" : "#171a20";
	return (
		<View style={styles.container}>
			<Pressable
				style={[styles.button, { backgroundColor: myBackgroundColor }]}
				onPress={() => {
					console.warn("press");
				}}
			>
				{/* como le agrego mas propiedades a las que tiene */}
				<Text style={[styles.text, { color: textColor }]}>{content}</Text>
			</Pressable>
		</View>
	);
};

export default StyledButton;
