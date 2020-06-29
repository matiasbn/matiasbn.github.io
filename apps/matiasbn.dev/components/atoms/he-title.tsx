import React from 'react';
import styled from 'styled-components';
import breakpoints from '@utils/breakpoints';

const HeroTitle = styled.p<{ color?: string }>`
  margin: 0px;
  color: ${(props) => (props.color ? props.color : 'white')};
  text-align: left;
  font-size: 40px;
  padding: 5px;
  animation: opacity-animation 2s;

  @media (orientation: portrait) {
    text-align: center;
    font-size: 40px;
    animation: opacity-animation 2s;
    animation-fill-mode: forwards;
  }

  @media (${breakpoints.tabletPortrait.min}) {
    font-size: 80px;
  }

  @media (${breakpoints.desktop.min}) {
    font-size: 20px;
  }

  @keyframes opacity-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
`;

export default HeroTitle;
