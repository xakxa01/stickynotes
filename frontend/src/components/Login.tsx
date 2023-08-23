import { Button, Input, Link } from '@nextui-org/react';
import '../styles/login.css';
import InputPassword from './InputPassword';
import { loginAndRegisterContext } from '../context/loginAndRegisterContext';
import React from 'react';

const Login = () => {
  const { defaultInputConfig } = React.useContext(loginAndRegisterContext);

  return (
    <div className='authContainer'>
      <h1 className='authTitle'>Login</h1>

      <form className='form'>
        <Input {...defaultInputConfig} type='email' label='Email' />

        <InputPassword defaultConfig={defaultInputConfig} />

        <Link className='my-3' href='#'>
          Did you forget your password?
        </Link>

        <Button color='primary' variant='ghost' radius='none' size='md'>
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
