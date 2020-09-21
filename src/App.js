import React  from 'react';
import TodoItemComponent from './components/TodoItemComponent';
import todoListData  from './data/todoListData';

export default class App extends React.Component{
  constructor(){
    super()
    this.state ={
      todo: todoListData
    };
    this.Handler = this.Handler.bind(this);
  };


  Handler(id){
    this.setState(prevStateTodo=>{
      const updatedTodoList = prevStateTodo.todo.map(item=>{
         if(item.id === id){
           item.completed = !item.completed;
          //  console.log(item);
         }
         return item;
      });
      return { todo: updatedTodoList};
    });
  };
  
  render(){
    const ListWithTodos = this.state.todo.map(item => <TodoItemComponent id={item.id} key={item.id} chackbox={this.Handler} task={item.task} checked={item.completed}/>);

    return(
      <div className="todo-list">
         {ListWithTodos}
      </div>
    );
  };
};