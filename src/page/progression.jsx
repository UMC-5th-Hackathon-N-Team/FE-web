import React, { useEffect, useState } from 'react';
import ProgressBar from '../components/progressbar';
import MeritApi from '../page/api/merit_api';

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
      <ProgressBar title={"은장 헌혈 유공패 진행도"} progress={Math.min(meritData / 30 * 100, 100)} />
      <ProgressBar title={"금장 유공패 진행도"} progress={Math.min(meritData / 50 * 100, 100)} />
      <ProgressBar title={"명예장 유공패 진행도"} progress={Math.min(meritData / 100 * 100, 100)} />
      <ProgressBar title={"명예대장 유공패 진행도"} progress={Math.min(meritData / 200 * 100, 100)} />
    </div>
  );
}
