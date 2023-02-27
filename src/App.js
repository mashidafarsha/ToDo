
import './App.css';
import './TODO/Todo.css'
// import Products from './component/products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Todo from "./TODO/Todo"

function App() {
  return (
    <div className="App">
      <Container>
   <Todo/>
    </Container>
    </div>
  );
}

export default App;
