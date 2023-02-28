import React, { useRef } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    height: '36px',
    padding: '4px 2px',
    borderBottom: `2px solid ${COLORS.black}`,
    '--fontSize': 18 + 'px',
    '--lineHeight': 21 + 'px',
  },
  small: {
    height: '24px',
    padding: '8px 2px',
    borderBottom: `1px solid ${COLORS.black}`,
    '--fontSize': 14 + 'px',
    '--lineHeight': 16 + 'px',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const input = useRef(null);
  const handleClick = _ => {
    input.current.focus();
  };

  return (
    <Wrapper width={width} style={SIZES[size]} onClick={handleClick}>
      <VisuallyHidden>Please enter a {input.type} input.</VisuallyHidden>
      <Icon id={icon} size={size === 'large' ? 16 : 11} strokeWidth={size === 'large' ? 2 : 1} />
      <Input label={label} placeholder={placeholder} ref={input} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: ${p => p.width}px;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 1px solid ${COLORS.primary};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const Input = styled.input`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  border: none;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    font-size: var(--fontSize);
    line-height: var(--lineHeight);
    color: ${COLORS.gray500};
  }

  &:focus {
    outline: none;
  }
`;

export default IconInput;
