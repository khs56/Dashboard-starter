import React from 'react'
import { UpdatesData } from '../../Data/Data'

const Updates = () => {
  return (
    <div className='Updates'>
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="" />
            <div className="notification">
              <div>
                <span>{update.name}</span>
                <span>{update.notification}</span>
              </div>
            </div>
            <div>
              <span>
                {update.time}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Updates