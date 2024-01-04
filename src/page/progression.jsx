import React from 'react'
import ProgressBar from '../components/progressbar'
export default function Progression() {
  return (
    <div>
      <ProgressBar progress={50} />
      <ProgressBar progress={70} />
      <ProgressBar progress={100} />
    </div>
  )
}
