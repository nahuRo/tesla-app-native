import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CartList from "./components/CarsList/CarsList";
import Header from "./components/Header/Header";

export default function App() {
	return (
		<View style={styles.container}>
			<Header />
			<CartList />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
