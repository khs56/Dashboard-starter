import React from 'react'
import Cards from '../Cards/Cards'
import './MainDash.css'
import Table from '../../components/Table/Table'
import RightSide from '../RightSide/RightSide'

const MainDash = () => {
  return (
    <div className='MainDash'>
      <h1>Dashboard</h1>
      <Cards />
      <Table />
      <RightSide />
    </div>
  )
}

export default MainDash
