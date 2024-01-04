import React, { useEffect, useState } from 'react';
import History from '../components/history';
import styled from 'styled-components';
import MyPageApi from '../page/api/my_page_api';
import UserInfo from '../components/user_info';
import BloodCardApi from '../page/api/blood_card';

const ParentContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const EmptyContainer = styled.div`
  height: 180px;
  margin-top: auto;
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
          sex: myPageData.sex,
          blood: myPageData.blood,
          merit: myPageData.merit,
          imageUri: myPageData.imageUrl,
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
    <ParentContainer>
    <Container>
      <UserInfo {...userData} />
      <h3 style={{ textAlign: 'left', marginLeft: 0 }}>🏆 헌혈 내역</h3>
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
    <EmptyContainer/> 
    </ParentContainer>
  );
};

export default MyPage;
