/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {

  let Component;
  if( size === 'large'){
    Component = Large;
  } else if ( size === 'medium'){
    Component = Medium;
  } else if ( size === 'small'){
    Component = Small;
  }

  return (
    <Component>
      <Progress value={value} />
    </Component>
  );
};

const Bar = styled.div`
  width: 370px;
  height: 24px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  overflow: hidden;
`;

const Large = styled(Bar)`
  padding: 4px;
`;

const Medium = styled(Bar)`
  height: 12px;
`;

const Small = styled(Bar)`
  height: 8px; 
`;

const Progress = styled.div`
  background: ${COLORS.primary};
  height: 100%;
  width: ${props => props.value}%;
  border-radius: 4px 0px 0px 4px;
  z-index: 1;
`;

export default ProgressBar;
