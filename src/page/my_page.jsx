import React, { useEffect, useState } from 'react';
import History from '../components/history';
import styled from 'styled-components';
import BloodCardApi from '../page/api/blood_card'
import UserInfo from '../components/user_info';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

const MyPage = () => {
  const userData = {
    name: '소피',
    gender: '여성',
    birthdate: '2001.03.13',
    bloodType: 'O형',
    donationCount: 7,
  };

  const [userBloodList, setUserBloodList] = useState([]);

  useEffect(() => {
    const fetchBloodCardData = async () => {
      try {
        const bloodCardData = await BloodCardApi();
        setUserBloodList(bloodCardData.userBloodList);
      } catch (error) {
        console.error('Error for blood_card:', error);
      }
    };

    fetchBloodCardData();
  }, []);

  return (
    <Container>
      <UserInfo {...userData} />
      <h3 style={{ textAlign: 'left' }}>🏆 헌혈 내역</h3>
      {userBloodList.map((item, index) => (
        <History
          key={index} 
          date={item.date}
          donation_id={item.number} 
          donation_type={item.type} 
          donor_center={item.location} 
        />
      ))}
    </Container>
  );
}

export default MyPage;
