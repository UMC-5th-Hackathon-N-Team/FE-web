import React from 'react'
import History from '../components/history'
import ProgressBar from '../components/progressbar'
export default function Progression() {
  return (
    <div>
      <ProgressBar title="🏆 헌혈 유공패 진행도" progress={50} />
      <h3>🏆 헌혈 내역</h3>
      <History/>
    </div>
  )
}
