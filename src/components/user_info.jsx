import React from 'react';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 10px;
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const UserInfoItem = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const UserInfo = ({ name, gender, birthdate, bloodType, donationCount }) => {
  return (
    <UserInfoContainer>
      <UserInfoItem>{`이름: ${name}`}</UserInfoItem>
      <UserInfoItem>{`성별: ${gender}`}</UserInfoItem>
      <UserInfoItem>{`생년월일: ${birthdate}`}</UserInfoItem>
      <UserInfoItem>{`혈액형: ${bloodType}`}</UserInfoItem>
      <UserInfoItem>{`현재까지 헌혈 횟수: ${donationCount}회`}</UserInfoItem>
    </UserInfoContainer>
  );
};

export default UserInfo;
