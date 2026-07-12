/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiChevronLeft, FiChevronRight, FiClock } from "react-icons/fi";

interface CalendarProps {
  selectedDate: number | null;
  onDateSelect: (day: number) => void;
  currentDate: Date;
  onMonthChange: (date: Date) => void;
}

const Calendar = ({
  selectedDate,
  onDateSelect,
  currentDate,
  onMonthChange,
}: CalendarProps) => {
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const generateCalendarDays = () => {
    const days = [];
    const totalSlots = 42;

    const prevMonthStart = daysInPrevMonth - firstDayOfMonth + 1;
    for (let i = prevMonthStart; i <= daysInPrevMonth; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    const remainingSlots = totalSlots - days.length;
    for (let i = 1; i <= remainingSlots; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  const prevMonth = () => {
    onMonthChange(new Date(currentYear, currentMonth - 1, 1));
  };

  const nextMonth = () => {
    onMonthChange(new Date(currentYear, currentMonth + 1, 1));
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const isToday = (day: number, isCurrentMonth: boolean) => {
    const today = new Date();
    return (
      isCurrentMonth &&
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isSelected = (day: number, isCurrentMonth: boolean) => {
    return isCurrentMonth && selectedDate === day;
  };

  const handleDateSelect = (day: number, isCurrentMonth: boolean) => {
    if (isCurrentMonth) {
      onDateSelect(selectedDate === day ? null as any : day);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl w-full h-fit">
      <h3 className="text-neutral-65 text-xl font-bold text-center">
        Select a Date
      </h3>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FiChevronLeft className="text-gray-600 text-xl" />
        </button>
        <h4 className="text-neutral-70 font-semibold text-lg">
          {monthName} {currentYear}
        </h4>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FiChevronRight className="text-gray-600 text-xl" />
        </button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 gap-1 mt-4">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-semibold text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1 mt-2">
        {calendarDays.map((dayObj, index) => (
          <button
            key={index}
            onClick={() => handleDateSelect(dayObj.day, dayObj.isCurrentMonth)}
            disabled={!dayObj.isCurrentMonth}
            className={`
              text-center py-2.5 rounded-full text-sm font-medium transition-all
              ${!dayObj.isCurrentMonth && 'text-gray-300 cursor-not-allowed'}
              ${isToday(dayObj.day, dayObj.isCurrentMonth) && 'text-primary-10 font-bold'}
              ${isSelected(dayObj.day, dayObj.isCurrentMonth) && 'bg-primary-10 text-white hover:bg-primary-20'}
              ${dayObj.isCurrentMonth && !isSelected(dayObj.day, dayObj.isCurrentMonth) && 'hover:bg-gray-100'}
            `}
          >
            {dayObj.day}
          </button>
        ))}
      </div>

      {/* Time Zone */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <FiClock className="text-gray-500" />
          <span className="text-sm text-gray-600">Time zone</span>
        </div>
        <span className="text-sm font-medium text-gray-700">
          UTC Time ({new Date().toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
          })})
        </span>
      </div>

      {/* Selected Date Display */}
      {selectedDate && (
        <div className="mt-4 p-3 bg-primary-10/10 rounded-lg text-center">
          <p className="text-sm text-primary-10 font-medium">
            Selected: {monthName} {selectedDate}, {currentYear}
          </p>
        </div>
      )}
    </div>
  );
};

export default Calendar;