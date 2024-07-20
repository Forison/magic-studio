import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
`;

const Footer = (): JSX.Element => (
  <FooterContainer>
    <p>&copy; 2019 Magic Studio. All Rights Reserved.</p>
  </FooterContainer>
);

export default Footer;
