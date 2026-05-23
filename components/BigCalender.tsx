"use client"

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/app/lib/data';
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react';

const localizer = momentLocalizer(moment);


const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView:View) => {
        setView(selectedView);
    }

    return(
        <div className="overflow-x-auto w-full">
        <div style={{ minWidth: "600px" }}>
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={["work_week", "day"]}
                view={view}
                style={{ height: "calc(100vh)" }}
                onView={handleOnChangeView}
                min={new Date(2025, 1, 0, 8, 0, 0)}
                max={new Date(2025, 1, 0, 18, 0, 0)}
            />
        </div>
    </div>
    );
};

export default BigCalendar;