import { FC } from 'react';
import { IdefaultInputConfig } from '../type';
import { Input } from '@nextui-org/react';
import React from 'react';
import { IconEye, IconEyeClosed } from '@tabler/icons-react';

interface InputPasswordProps {
  defaultConfig: IdefaultInputConfig;
  label?: string;
}

const InputPassword: FC<InputPasswordProps> = ({ defaultConfig, label = 'Password' }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...defaultConfig}
      label={label}
      type={isVisible ? 'text' : 'password'}
      endContent={
        <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
          {isVisible ? (
            <IconEye className='text-2xl text-default-400 pointer-events-none' />
          ) : (
            <IconEyeClosed className='text-2xl text-default-400 pointer-events-none' />
          )}
        </button>
      }
    />
  );
};

export default InputPassword;
