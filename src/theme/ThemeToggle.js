import React from 'react';
import styled from 'styled-components';

function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleWrapper onClick={toggle} mode={mode}>
      <Slider mode={mode} />
    </ToggleWrapper>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.button`
  position: fixed;
  z-index: 999999;
  bottom: 4%;
  right: 3%;
  
  background-color: ${props => props.theme.bgColor};
  border: ${props => props.theme.borderColor};
  width: 60px; /* 크기를 작게 조정 */
  height: 30px; /* 크기를 작게 조정 */
  border-radius: 50px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.mode === 'dark' ? 'flex-end' : 'flex-start')};
  cursor: pointer;
  transition: background-color 0.5s ease, justify-content 0.5s ease; /* 부드러운 전환 */

  box-shadow: ${props => props.mode === 'dark'
    ? '0px 4px 8px rgba(40, 40, 40, 0.8)'
    : '0px 4px 8px rgba(100, 100, 100, 0.2)'
  };
`;

const Slider = styled.div`
  width: 22px; /* 슬라이더 크기 조정 */
  height: 22px; /* 슬라이더 크기 조정 */
  background-color: ${props => props.mode === 'dark' ? '#333' : '#fff'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px; /* 이모지 크기 조정 */
  transition: background-color 0.5s ease, transform 1s ease; /* 부드러운 전환 */
  transform: ${props => (props.mode === 'dark' ? 'translateX(-2px)' : 'translateX(2px)')};
  box-shadow: ${props => props.mode === 'dark'
    ? '0px 4px 8px rgba(40, 40, 40, 0.8)'
    : '0px 4px 8px rgba(100, 100, 100, 0.2)'};
`;
