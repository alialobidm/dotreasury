import React from "react";
import styled, { css } from "styled-components";

import Text from "../../components/Text";

const Wrapper = styled.div`
  background: #FBFBFB;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`

const Circle = styled.div`
  width: 16px;
  height: 16px;
  border: 4px solid ${p => p.disabled ? "rgba(29, 37, 60, 0.24)" : p.color};
  border-radius: 50%;
`

const LabelText = styled(Text)`
  font-weight: 500;
  ${p => p.disabled&&css`
    color: rgba(29, 37, 60, 0.24);
  `}
`

const Label = ({ name, color, disabled, onToggleDisabled }) => {
  return (
    <Wrapper onClick={onToggleDisabled}>
      <Circle color={color} disabled={disabled} />
      <LabelText disabled={disabled}>{name}</LabelText>
    </Wrapper>
  )
}

export default Label;