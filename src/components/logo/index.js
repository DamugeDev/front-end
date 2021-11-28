import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  const StyledLogo = styled.div`
    background: red;
  `;
  return (
    <StyledLogo>
      <p>Logo</p>
    </StyledLogo>
  );
}
