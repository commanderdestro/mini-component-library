import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const Select = styled.select`
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    border: none;
    width: ${displayedValue.length * 15 + 'px'};
    background: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    
    padding: 12px 0px 12px 16px;
    border: none;
    border-radius: 8px;
    background: ${COLORS.transparentGray15};
  `;

  const Wrapper = styled.div`
    position: relative;
    width: fit-content;
  `;

  const RightIcon = styled(Icon)`
    position: absolute;
    right: 16px;
    top: 12px;
  `;

  return (
    <Wrapper>
      <Select label={label} value={value} onChange={onChange}>
        {children}
      </Select>
      <RightIcon id='chevron-down' />
    </Wrapper>
  );
};
export default Select;
