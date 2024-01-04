import React from 'react';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
  width: 90%;
  height: 100%;
  background: white;
  border-radius: 10px;
  border: 1px black solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

const UserInfoItem = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const UserInfo = ({ name, birth, blood, merit, imageUri }) => {

  return (
    <UserInfoContainer>
      <UserImage src={imageUri} alt="User" />
      <div>
        <UserInfoItem>{`이름: ${name}`}</UserInfoItem>
        <UserInfoItem>{`생년월일: ${birth}`}</UserInfoItem>
        <UserInfoItem>{`혈액형: ${blood}`}</UserInfoItem>
        <UserInfoItem>{`현재까지 ${merit}번 헌혈했어요!`}</UserInfoItem>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
