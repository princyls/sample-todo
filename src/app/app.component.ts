import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  nextId = 1;
  todos = [];
  email="";
  password="";
  
 user: Array<{email:string,password:string}>=[
 {email:"princy@gmail.com",password:"princy"},
 {email:"princy@gmail.com",password:"princy"},
 ];


  princy(){
    this.todos.push(this.user);
    console.log();

  }
  

  delete(todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  add(newTodo1) {
    console.log(newTodo1+"******************")
    let newTodo = {
      id: this.nextId,
      label: newTodo1,
      done: false
    };
    this.todos.push(newTodo);
    this.nextId++;
   
  }

  toggle(todo) {
    todo.done = !todo.done;
    console.log(todo.done+"**************************************")
  }
nextid=1;
  toDo=[];
  create(newTodo2){
    let todo1={
      id:this.nextid,
      label:newTodo2,
      done:false
    };
    this.toDo.push(todo1);
    this.nextid++;

  }
  delete1(todo1) {
    console.log(todo1+"************")
    this.toDo = this.toDo.filter(t1 => t1.id !== todo1.id);
  }
}