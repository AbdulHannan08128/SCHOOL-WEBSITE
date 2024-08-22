import React from 'react';
import './Performers.css';
import PerformerCard from '../PerformerCard/PerformerCard';
import { PERFORMERS, TEXTS } from '@/constants';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import MotionDiv from '@/utils/motion';

const Performers: React.FC = () => {
  return (
    <div className=' max-w-screen overflow-hidden'>
    <div className='flex flex-wrap w-screen h-auto lg:p-14 md:p-7 sm:p-4 text-white bg-yellow-img max-w-screen overflow-hidden'>
      <SectionTitle title={TEXTS.performer_section_title}/>
      <div className='p-3 flex flex-wrap align-middle w-full gap-4 justify-center'>
      {PERFORMERS.map((performer, index) => (
        <MotionDiv key={index} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} >
        <PerformerCard performer={performer} />
        </MotionDiv>
      ))}
      </div>
      </div>
    </div>
  );
};

export default Performers;
