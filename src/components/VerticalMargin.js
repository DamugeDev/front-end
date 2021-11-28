import React from 'react';
import styled from 'styled-components';

export default function VerticalMargin({ children, top, bottom }) {
  const Container = styled.div`
    margin-top: ${top ? top : '2rem'};
    margin-bottom: ${bottom ? bottom : '2rem'};
  `;
  return <Container>{children}</Container>;
}
