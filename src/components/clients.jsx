import React from 'react'
import { style } from "../util/style";
import { client } from '../util/contstants';
import ClientCard from './clientCard';

const Clients = () => {
  return (
    <div className={`${style.flexCenter} my-4`}>
      <div className={`${style.flexCenter} flex-wrap w-full`}>
        {client.map((val) => (
          <ClientCard key={val.id} logo={val.logo}/>
        ))}
      </div>
    </div>
  )
}

export default Clients