import React from 'react';
import './SectionTitle.css';
import { COLORS } from '@/constants';

interface props {
  title:string
}

const SectionTitle:React.FC<props> = ({title}) => {
  return (
    <div className='w-screen flex justify-center align-middle m-2'>
      <h2 className='w-auto h-auto p-2 rounded-xl border-4' style={{background:COLORS.primary, borderColor:COLORS.secondary}}>{title}</h2>
    </div>
  )
}

export default SectionTitle;