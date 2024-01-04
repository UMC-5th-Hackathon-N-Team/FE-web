import React from 'react';
import styled from 'styled-components';

const CustomProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px 0px 20px;
`;

const Image = styled.img`
  width: 20%;
`;

const ProgressBarContainer = styled.div`
  width: 60%;
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

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 800;
`;

const ProgressText = styled.div`
color: #777; /* 회색 */
font-size: 11px;
font-weight: 600;
`;
const PercentText = styled.div`
  height: 100%;
  padding-left: 10px;
  position: absolute;
  color: white;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
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

const ProgressBar = ({ title, progress, totalCount, completedCount, imageSrc }) => {
  const ratioText = `${completedCount}/${totalCount}`;

  return (
    <CustomProgressBarContainer>
      <Image src={imageSrc} alt="Icon" />
      <ProgressBarContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <ProgressText>{ratioText}</ProgressText>
        </TitleContainer>
        <ProgressContainer>
          <ProgressBarBackground />
          <ProgressBarFill progress={Math.min(Math.floor(completedCount / totalCount * 100))}/>
          <PercentText>{`${Math.min(Math.floor(completedCount / totalCount * 100))}%`}</PercentText>
        </ProgressContainer>
      </ProgressBarContainer>
    </CustomProgressBarContainer>
  );
};

export default ProgressBar;
