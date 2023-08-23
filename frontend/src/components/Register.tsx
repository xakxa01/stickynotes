import { Button, Input } from '@nextui-org/react';
import InputPassword from './InputPassword';
import { loginAndRegisterContext } from '../context/loginAndRegisterContext';
import React from 'react';

const Register = () => {
  const { defaultInputConfig } = React.useContext(loginAndRegisterContext);

  return (
    <div className='authContainer'>
      <h1 className='authTitle'>Register</h1>

      <form className='form'>
        <Input {...defaultInputConfig} type='email' label='Email' />

        <InputPassword defaultConfig={defaultInputConfig} />

        <InputPassword defaultConfig={defaultInputConfig} label='Confirm Password' />

        <Button color='primary' variant='ghost' radius='none' size='md' className='mt-3'>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
