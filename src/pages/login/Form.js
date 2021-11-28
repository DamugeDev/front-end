import React from 'react';
import Input from '../../components/Input';
import { LoginForm } from './Styles';

export default function Form() {
  return (
    <LoginForm className="form">
      <div className="form-group mb-3">
        <label className="form-label">Nome</label>
        <Input type="email" class="form-control" />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Senha</label>
        <Input type="password" class="form-control" />
      </div>
    </LoginForm>
  );
}
