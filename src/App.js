import logo from './logo.svg';
import './App.css';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';

import ForgetPassword from './components/forgetpassword/ForgetPassword';

function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}

            <SignIn/>
{/* 
      <ForgetPassword/> */}
    </div>
  );
}

export default App;
