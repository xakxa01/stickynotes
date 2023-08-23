import '../styles/loginAndRegister.css';
import { Button } from '@nextui-org/react';
import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { LoginAndRegisterProvider } from '../context/loginAndRegisterContext';

const LoginAndRegister = () => {
  const defaultCard = 'translate-x-60';
  const [moveCard, setMoveCard] = React.useState(true);

  const authOptions = [
    {
      text: 'Do not have an account?',
      buttonText: 'Log up',
    },
    {
      text: 'Ready to log in?',
      buttonText: 'Log in',
    },
  ];

  const changeMode = () => {
    setMoveCard(!moveCard);
  };

  return (
    <div className='container'>
      <div className='containerPreform'>
        {authOptions.map((option, index) => (
          <div className='containerBackCards' key={index}>
            <h1 className='authText'>{option.text}</h1>

            <Button radius='none' color='primary' onClick={changeMode}>
              {option.buttonText}
            </Button>
          </div>
        ))}

        <div className={`formContainer ${!moveCard ? `-${defaultCard}` : defaultCard}`}>
          <LoginAndRegisterProvider>
            {moveCard ? <Login /> : <Register />}
          </LoginAndRegisterProvider>
        </div>
      </div>
    </div>
  );
};

export default LoginAndRegister;
