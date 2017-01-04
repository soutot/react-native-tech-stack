//if state is undefined, then set it to 'null'
export default (state = null, action) => {
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default:
			return state;
	}
};
