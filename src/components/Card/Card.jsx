import React from 'react'
import './Card.css'
import { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Card = (props) => {

  const [expanded, setExpanded] = useState(false)

  return (
    <div className="Card">
      <AnimateSharedLayout>
        {
          expanded ? (
            'Expanded'
          ) :
            <CompactCard param={props} />
        }
      </AnimateSharedLayout >
    </div >
  )
}

//compactcard
function CompactCard({ param }) {
  const Png = param.png;
  return (
    <div className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow
      }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <div className="name">
          {param.series[0].name}
        </div>
      </div>
      <div className="detail">
        <Png />
        <span className='dollar'>${param.value}</span>
        <span className='card-text'>Last 24</span>
      </div>
    </div >
  )
}

//expanded card
function ExpandedCard({ param }) {
  return (
    <div className="ExpandedCard">
      Expanded Card
    </div>
  )
}



export default Card