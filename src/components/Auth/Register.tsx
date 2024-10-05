import React from 'react';
import { useRegisterMutation } from '../../api/authApi';
import { useNotification } from '../../hooks/useNotification';
import AuthForm from './AuthForm';

const Register: React.FC = () => {
  const [register] = useRegisterMutation();
  const notify = useNotification();

  const handleRegister = async (data: any) => {
    try {
      await register(data).unwrap();
      notify('Registration successful!', 'success');
    } catch (error) {
      notify('Registration failed!', 'error');
    }
  };

  return <AuthForm onSubmit={handleRegister} title="Register" />;
};

export default Register;
