import React, { useEffect, useState } from 'react';
import History from '../components/history';
import styled from 'styled-components';
import MyPageApi from '../page/api/my_page_api';
import UserInfo from '../components/user_info';
import BloodCardApi from '../page/api/blood_card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const MyPage = () => {
  const [userData, setUserData] = useState({});
  const [userBloodList, setUserBloodList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myPageData = await MyPageApi();
        setUserData({
          name: myPageData.name,
          birth: myPageData.birth,
          blood: myPageData.blood,
          merit: myPageData.merit,
          imageUri: myPageData.imageUri,
        });
        const bloodCardData = await BloodCardApi();
        setUserBloodList(bloodCardData.userBloodList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
};

export default MyPage;
