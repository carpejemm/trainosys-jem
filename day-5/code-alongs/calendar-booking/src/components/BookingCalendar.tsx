import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './styles.css';

const BookingCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [events, setEvents] = useState<any[]>([]);


  const handleDateClick = (arg: any) => {
    setSelectedDate(arg.dateStr);
  };

  const handleBookSlot = () => {
    if (selectedDate) {
      console.log('Booking slot:', selectedDate);

      const newEvent = {
        title: 'New Booking',
        date: selectedDate,
      };
      setEvents([...events, newEvent]);

      setSelectedDate(null);
    }
  };

  

  return (
    <div className="calendar-container">
      <div className="book-button-container">
        <button className="book-button" onClick={handleBookSlot}>
          Book Slot
        </button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        editable={true}
        selectable={true}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default BookingCalendar;





// const events = [
  //   {
  //     title: 'Meeting 1',
  //     date: '2023-08-01T12:00:00',
  //   },
  //   {
  //     title: 'Appointment 2',
  //     date: '2023-08-05T15:30:00',
  //   },
  // ];


