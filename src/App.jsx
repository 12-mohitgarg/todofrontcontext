import './App.css'
import TodoList from './components/TodoList'
import { TodoProvider } from './todocontext/Todocontext'

function App() {


  return (
    <>
    <TodoProvider>
      <TodoList/>
      </TodoProvider>
    </>
  )
}

export default App
