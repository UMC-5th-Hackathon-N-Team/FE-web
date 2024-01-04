import React from 'react';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
  width: 90%;
  height: 100%;
  background: white;
  border-radius: 10px;
  border: 1px #BFBFBF solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const UserImage = styled.img`
  width: 130px;
  height: 120px;
  border-radius: 50%;
  margin-right: 20px;
`;

const GreyBox = styled.div`
  width: 120%;
  height: 100%;
  background: white;
  border-radius: 10px;
  border: 0.50px #BFBFBF solid;
  padding: 4px 0px 4px 5px;
  margin-bottom:5px
`;

const RedBox = styled.div`
  width: 120%;
  height: 100%;
  background: white;
  border-radius: 10px;
  border: 0.50px #F50000 solid;
  padding: 4px 0px 4px 5px;
  margin-bottom:5px
`;
const UserInfoItem = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

const UserInfo = ({ name, birth, blood, merit, imageUri }) => {

  return (
    <UserInfoContainer>
      <UserImage src={imageUri} alt="User" />
      <div>
        <GreyBox><UserInfoItem>{`이름: ${name}`}</UserInfoItem></GreyBox>
        <GreyBox><UserInfoItem>{`생년월일: ${birth}`}</UserInfoItem></GreyBox>
        <RedBox><UserInfoItem>{`혈액형: ${blood}`}</UserInfoItem></RedBox>
        <RedBox><UserInfoItem>{`누적 헌혈횟수: ${merit}`}</UserInfoItem></RedBox>
      
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
