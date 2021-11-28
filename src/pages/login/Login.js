import React from 'react';
import Head from '../../components/data/Head';
import Logo from '../../components/logo';
import Title from '../../components/Title';
import VerticalMargin from '../../components/VerticalMargin';
import Form from './Form';
import { LoginHeader, LoginTitle, LoginBody } from './Styles';

export default function Login() {
  return (
    <>
      <Head title="Login" />

      <LoginHeader>
        <Logo />
        <LoginTitle>
          <Title className="no-margin" text="Departamento de cultura" />
        </LoginTitle>
      </LoginHeader>

      <LoginBody className="container">
        <VerticalMargin>
          <p>Preencha os campos.</p>
          <Form />
        </VerticalMargin>
      </LoginBody>
    </>
  );
}
