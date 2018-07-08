import * as actionTypes from '../actions';

const intialState = {
	results: []
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({value: action.result, id: new Date()})
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