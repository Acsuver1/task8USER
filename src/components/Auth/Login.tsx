import React from 'react';
import { useLoginMutation } from '../../api/authApi';
import { useNotification } from '../../hooks/useNotification';
import AuthForm from './AuthForm';

const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const notify = useNotification();

  const handleLogin = async (data: any) => {
    try {
      await login(data).unwrap();
      notify('Login successful!', 'success');
    } catch (error) {
      notify('Login failed!', 'error');
    }
  };

  return <AuthForm onSubmit={handleLogin} />;
};

export default Login;
