import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 17px 20px;
  border-radius: 10px;
  border: 1px #BFBFBF solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  margin: 20px;
`;

const Title = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 800;
  word-wrap: break-word;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 21px;
  position: relative;
`;

const ProgressBarBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #D9D9D9;
  border-radius: 30px;
`;

const ProgressBarFill = styled.div`
  width: ${({ progress }) => progress}%;
  height: 100%;
  position: absolute;
  background: #F50000;
  border-radius: 30px;
`;

const ProgressText = styled.div`
  height: 100%;
  padding-left : 10px;
  position: absolute;
  color: white;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const ProgressBar = ({title, progress }) => {
  return (
    <ProgressBarContainer>
      <Title>{title}</Title>
      <ProgressContainer>
        <ProgressBarBackground />
        <ProgressBarFill progress={progress} />
        <ProgressText>{`${progress}%`}</ProgressText>
      </ProgressContainer>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
