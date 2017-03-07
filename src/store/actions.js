import Vue from 'vue'
import mutations from './mutations'
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const actionIncrease = ({ commit }, num) => {
	/*
	 * 第二個參數是接收 Vue 傳遞的 value: num
	 * template 上面我們是這們寫的:
	 *   @click="actionIncrease(num)"
	 */
	console.log('actionIncrease',num);
	commit(types.INCREASE, num);
}

export const actionDecrease = ({ commit }, num) => {
	console.log('actionDecrease', num);
	commit(types.DECREASE, num);
}

export const actionCountReset = ({ commit }) => {
	console.log('actionCountReset');
	commit(types.COUNT_RESET);
}

export const actionMultiplication = ({ commit }, num) => {
	console.log('actionMultiplication', num);
	commit(types.Multiplication, num);
}

export const actionDivision = ({ commit }, num) => {
	console.log('actionDivision', num);
	commit(types.Division, num);
}

export const addTodo = ({ commit }, newTodo) => {
  // 直接將 newTodo 傳遞給 mutation
  commit(types.ADD_TODO, newTodo);
}