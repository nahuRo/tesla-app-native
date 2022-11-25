import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
	cartContainer: {
		width: "100%",
		height: Dimensions.get("screen").height,
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		position: "absolute",
	},
	titles: {
		marginTop: "30%",
		alignItems: "center",
	},
	title: {
		fontSize: 40,
		fontWeight: "500",
	},
	subTitle: {
		fontSize: 16,
		color: "#5c5e62",
	},
	buttonContainer: {
		position: "absolute",
		bottom: 50,
		width: "100%",
	},
	subTitleCTA: {
		textDecorationLine: "underline",
	},
});

export default styles;
