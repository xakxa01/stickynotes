import { FC, createContext } from 'react';
import { IdefaultInputConfig } from '../type';

interface IValue {
  defaultInputConfig: IdefaultInputConfig;
}

interface IProps {
  children: React.ReactNode;
}

const defaultInputConfig: IdefaultInputConfig = {
  isRequired: true,
  className: 'max-w-xs my-1',
  variant: 'underlined',
  color: 'primary',
};

const loginAndRegisterContext = createContext<IValue>({
  defaultInputConfig: defaultInputConfig,
});

const LoginAndRegisterProvider: FC<IProps> = ({ children }) => {
  const value: IValue = {
    defaultInputConfig,
  };

  return (
    <loginAndRegisterContext.Provider value={value}>
      {children}
    </loginAndRegisterContext.Provider>
  );
};

export { loginAndRegisterContext, LoginAndRegisterProvider };
