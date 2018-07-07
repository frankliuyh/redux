const intialState = {
	counter: 0,
	results: []
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + 1
			};
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1
			};
		case 'ADD':
			return {
				...state,
				counter: state.counter + action.val
			};
		case 'SUBTRACT':
			return {
				...state,
				counter: state.counter - action.val
			};
		case 'STORE_RESULT':
			return {
				...state,
				results: state.results.concat({value: state.counter, id: new Date()})
			};
		case 'DELETE_RESULT': 
			const arr = state.results.filter(result => result.id !==action.resultId);
			return {
				...state,
				results: arr
			};
		default:
			return state;
	}
};

export default reducer;