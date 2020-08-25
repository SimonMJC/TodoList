import React from 'react'
import {View} from 'react-native'
import Todos from './Todos'

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All':
                return todos
            case 'Complete':
                return todos.filter((t) => t.complete)
            case 'Active':
                return todos.filter((t) => !t.complete)
        }
    }
    todos = getVisibleTodos(todos, type)
    todos = todos.map((todo, i) => {
    return (
        <Todos
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
        todo={todo}/>
    )
})
return(
    <View>
        {todos}
    </View>
)
}
export default TodoList