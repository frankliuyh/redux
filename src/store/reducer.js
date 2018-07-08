import * as actionTypes from './actions';

const intialState = {
	counter: 0,
	results: []
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return {
				...state,
				counter: state.counter + 1
			};
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			};
		case actionTypes.ADD:
			return {
				...state,
				counter: state.counter + action.val
			};
		case actionTypes.SUBTRACT:
			return {
				...state,
				counter: state.counter - action.val
			};
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({value: state.counter, id: new Date()})
			};
		case actionTypes.DELETE_RESULT: 
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