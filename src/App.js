import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthForm from './pages/Auth';
import RegistrationForm from './pages/Registration';
import ConfirmEmail from './pages/ConfirmEmail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={AuthForm}/>
        <Route exact path='/registration' component={RegistrationForm}/>
        <Route exact path='/confirmemail' component={ConfirmEmail}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
