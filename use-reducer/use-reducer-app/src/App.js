import { useReducer } from 'react';
const App = () => {

	const addTwoNum = (state, action) => {
		console.log(state);
		console.log(action);
		switch (action.type) {
			case "Add":

				return { count: state.count + 2 }

			default:
				break;
		}
	}

	const [state, dispatch] = useReducer(addTwoNum, { count: 0 });
	return (
		<>
			<div>
				{state.count}
			</div>
			<button onClick={() => dispatch({ "type": "Add" })}>AddNumber</button>
		</>
	)
}

export default App;