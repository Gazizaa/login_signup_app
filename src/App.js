import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthForm from './pages/Auth';
import RegistrationForm from './pages/Registration';
import ConfirmEmail from './pages/ConfirmEmail';
import NotReceiveEmail from './pages/NotReceiveEmail';
import ForgetPassword from './pages/ForgetPassword';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route exact path='/' component={AuthForm}/>
        <Route exact path='/registration' component={RegistrationForm}/>
        <Route exact path='/confirmemail' component={ConfirmEmail}/>
        <Route exact path='/notreceiveemail' component={NotReceiveEmail}/>
        <Route exact path='/forgetpassword' component={ForgetPassword}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
