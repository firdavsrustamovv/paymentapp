import React from 'react'
import { style } from '../util/style'

const ClientCard = ({logo}) => {
  return (
    <div className={`${style.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] m-5`}>
      <img src={logo} alt="logo" className='sm:w-[192px] w-[100px] object-contain'/>
    </div>
  )
}

export default ClientCard