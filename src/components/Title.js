import React from 'react';
import styled from 'styled-components';

export default function Title({ text }) {
  const Container = styled.div`
    margin-bottom: 1rem;
  `;
  return (
    <Container className="container-small">
      <h2>{text}</h2>
    </Container>
  );
}
