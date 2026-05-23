"use client"

import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalender"
import Calender from "@/components/Calender"


const TeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
      <div className="h-full bg-white p-4 text-black rounded-md">
        <h1 className="text-xl font-semibold mb-1">Schedule</h1>
        <BigCalendar/>
      </div>

      </div>


      {/* RIGHT */}
      <div className="w-full xl:w-1/3 text-black flex-col gap-8 "> 
  
        <Announcements/>
      
      </div>
    </div>
  )
}

export default TeacherPage;