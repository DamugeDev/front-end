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

      <div className="radio-container mb-3">
        <p>Entrar como:</p>
        <div className="form-group mb-3">
          <Input type="radio" name="adm" />
          <Input type="radio" name="student" />
        </div>
      </div>
    </LoginForm>
  );
}
