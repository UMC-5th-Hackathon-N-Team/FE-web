import React from 'react'
import ProgressBar from '../components/progressbar'
export default function Progression() {
  return (
    <div>
      <ProgressBar title={"은장 헌혈 유공패 진행도"} progress={Math.min(45 / 30 * 100, 100)} />
      <ProgressBar title={"금장 유공패 진행도"}progress={Math.min(45 / 50 * 100, 100)} />
      <ProgressBar title={"명예장 유공패 진행도"} progress={Math.min(45 / 100 * 100, 100)} />
      <ProgressBar title={"명예대장 유공패 진행도"} progress={Math.min(45 / 200 * 100, 100)} />
    </div>
  )
}
