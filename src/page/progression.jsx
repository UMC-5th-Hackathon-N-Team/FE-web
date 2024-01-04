import React, { useEffect, useState } from 'react';
import ProgressBar from '../components/progressbar';
import MeritApi from '../page/api/merit_api';
import first from '../images/1.png'
import second from '../images/2.png'
import third from '../images/3.png'
import fourth from '../images/4.png'

export default function Progression() {
  const [meritData, setMeritData] = useState({});

  useEffect(() => {
    const fetchMeritData = async () => {
      try {
        const meritData = await MeritApi();
        setMeritData(meritData);
      } catch (error) {
        console.error('Error fetching merit data:', error);
      }
    };

    fetchMeritData();
  }, []);

  return (
    <div>
      <ProgressBar title={"은장 헌혈 유공패 진행도"} totalCount={30} completedCount = {meritData} imageSrc= {first} />
      <ProgressBar title={"금장 유공패 진행도"} totalCount={50} completedCount = {meritData} imageSrc= {second}/>
      <ProgressBar title={"명예장 유공패 진행도"} totalCount={100} completedCount = {meritData} imageSrc={third}/>
      <ProgressBar title={"명예대장 유공패 진행도"} totalCount={200} completedCount = {meritData} imageSrc={fourth}/>
    </div>
  );
}
