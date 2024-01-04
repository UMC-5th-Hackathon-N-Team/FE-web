import React from 'react';
import History from '../components/history';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const dummyData = [
  {
    donation_id: "01-02-374923",
    date: "2021.12.23",
    donation_type: "전혈 500ml",
    donor_center: "부산센터",
  },
  {
    donation_id: "01-02-123456",
    date: "2021.12.18",
    donation_type: "전혈 500ml",
    donor_center: "서울센터",
  },
  {
    donation_id: "01-02-123456",
    date: "2021.12.18",
    donation_type: "전혈 500ml",
    donor_center: "울산센터",
  },
];

export default function MyPage() {
  return (
    <div>
      <h3>🏆 헌혈 내역</h3>
      <Container>
      {dummyData.map((item, index) => (
        <History
          key={item.donation_id + index} 
          date={item.date}
          donation_id={item.donation_id}
          donation_type={item.donation_type}
          donor_center={item.donor_center}
        />
      ))}
    </Container>
    </div>
  );
}
