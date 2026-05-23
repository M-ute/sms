"use client"

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import  Image  from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


// TEMPORARY DATA
const events = [
    {
        id: 1,
        title: 'Math Exam',
        date: '18-09-26',
        description: 'Final math exam for SHS 2 students.'
    },
    {
        id: 2,
        title: 'Parent-Teacher Meeting',
        date: '14-07-26',
        description: 'Meeting to discuss student progress and concerns.'
    },
    {
        id: 3,
        title: 'Science Fair',
        date: '30-07-26',
        description: 'Annual science fair showcasing student projects.'
    }, 
]

const Calender = () => {
     const [value, onChange] = useState<Value>(new Date());
  return (

    <div className='bg-white rounded-lg p-4 shadow-md mb-4'>
      <Calendar onChange={onChange} value={value} />

       <div className='flex items-center justify-between gap-4'>
        <h1 className='text-lg font-semibold mt-4'>Upcoming Events</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20}/>
       </div>

      <div className='flex flex-col gap-2 mt-4'>
        {events.map((event) => (
            <div className='p-5 rounded-md border-2 border-gray-200 border-t-10 odd:border-t-purple-300 even:border-t-green ' key={event.id}>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                    <span className='text-sm text-gray-500'>{event.date}</span>
                </div>
                <p className='text-sm text-gray-500 mt-2'>{event.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Calender