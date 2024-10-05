import React from 'react';
import { useForm } from 'react-hook-form';
import './AuthForm.css'; 

interface AuthFormProps {
  onSubmit: (data: any) => void;
  title: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, title }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <h2>{title}</h2>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true })}
          className="auth-input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register('password', { required: true })}
          className="auth-input"
        />
      </div>
      <button type="submit" className="auth-button">Submit</button>
    </form>
  );
};

export default AuthForm;
