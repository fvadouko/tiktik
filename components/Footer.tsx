import React from 'react'
import { NextPage } from 'next';
import { footerList1, footerList2, footerList3 } from '../utils/constants';

const List = ({ items, mt }: { items: string[], mt: Boolean }) => (
    <div className={`flex flex-wrap gap-1 ${mt && 'mt-1'}`}>
      {items.map((item: string) => (
        <p key={item} className='text-gray-400 text-sm  hover:underline cursor-pointer' >
          {item}
        </p>
      ))}
    </div>
  );

const Footer = () => {
  return (
    <div className='mt-3 hidden xl:block'>
    <List items={footerList1} mt={false} />
    <List items={footerList2} mt={true} />
    <List items={footerList3} mt={true} />
    <p className='text-gray-400 text-sm mt-1'>© 2022 TikTik</p>
  </div>
  )
}

export default Footer