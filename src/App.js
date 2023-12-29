import { useSelector } from "react-redux";
import "./App.css";
import Background from "./components/appBackground";



function App() {
	useSelector((state) => state.tasks);

	return (
		<Background/>
	);
}

export default App;
