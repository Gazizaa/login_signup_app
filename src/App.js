import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'
import AuthForm from './pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={AuthForm}/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
