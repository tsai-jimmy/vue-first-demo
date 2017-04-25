<template>
    <div class="container">
        <h1>vue & vuex Todo List example</h1>
        <hr>
        
        <!--<div>
             
            加一個 input 用來新增 todo希望按 enter 也可以增加 todo
            在 Vue 裡面要捕捉 "按鍵事件" 可以使用 @keyup.[鍵位碼]
            加入 @keyup.enter(修飾) 也等於 @keyup.13
            
            <input type="text" placeholder="add Todo.." v-model="newTodo" @keyup.enter="actionAddTodo" />
             按鈕增加 todo 
            <button @click="actionAddTodo">add todo</button>
        </div>-->
        <div class="row">
            <div class="input-group col-md-4">
                <input type="text" class="form-control"placeholder="add Todo.." v-model="newTodo" @keyup.enter="actionAddTodo" />
                <span class="input-group-btn">
                    <button class="btn btn-success" type="button" @click="actionAddTodo">
                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button>
                </span>
            </div>
        </div>
        <!-- 左右兩個欄位分別存放todo / done -->
        <div class="row">
            <div class="col-md-6">
                <!-- <h2>Todo List:</h2>
                <ul>
                    使用 for render todos
                    <li v-for="(todo, index) in todos">{{ todo.content }}</li>
                </ul> -->
                <h2>Todo List</h2>
                <li v-for="(item, index) in todoList">
                    <label>
                        <!-- 
                          改變狀態
                          套用 vuex 因此不能使用 v-model 做雙向綁定，會報錯誤
                          1. 將 list 的 value bind 到 input checked 屬性上，改變樣式。
                          2. onchange 事件發出 action 帶入 key
                         -->
                        <input type="checkbox" :checked="item.done" @change="toggleTodo( item.key )">
                        {{ item.content }}
                    </label>
                    <!-- 刪除按鈕 onclick 事件發出 action 帶入 key -->
                    <button class="btn btn-xs btn-danger" @click="deleteTodo( item.key )">
                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                    </button>
                </li>
            </div>
            <div class="col-md-6">
                <h2>Done List:</h2>
                <ul >
                    <li v-for="(item, index) in doneList">
                        <label>
                            <input type="checkbox" :checked="item.done" @change="toggleTodo( item.key )">
                            {{ item.content }}
                        </label>
                    </li>
                </ul>
            </div>
        </div><!-- end row -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            newTodo:''
        }
    },
    computed: mapGetters({
    	// 使用取 list 的函式，將資料存在 todos
        todoList: 'getTodo',
        doneList: 'getDone',
    }),
    methods: {
        ...mapActions ([
            'toggleTodo',//方法一，引入
            'deleteTodo'
        ]),
        actionAddTodo() {
            // 方法一、使用
            // this.addTodo( this.newTodo );

            // 這邊示範第二種方法，不需要先引入 action 可以直接呼叫（調用）。
            // 使用 this.$store.dispatch( action(String), value );
            this.$store.dispatch('addTodo', this.newTodo);

            // 清除 data 中 input 的 value
            this.newTodo = '';
        }
    }

}
</script>