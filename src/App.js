
//Components
import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

// CSS
import './css/Todo.css'


function App() {
  return (
    <>
      <div className="todoapp">
        <Header />
        <TodoList />
        <Footer />
      </div>
    </>
  );
}

export default App;
