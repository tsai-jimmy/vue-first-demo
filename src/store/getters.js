export const getCount = state => { 
	// console.log(state.count);
	return state.count;
}

export const getTodo = state => { 
	return state.todos.filter((item) => {
		return !item.done;
	});
}

export const getDone = state => {
	return state.todos.filter((item) => {
		return item.done;
	});
} 