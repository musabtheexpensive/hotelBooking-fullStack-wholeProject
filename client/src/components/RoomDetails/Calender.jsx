import { DateRange } from 'react-date-range'

const Calender = ({ value, handleDateChange }) => {
  console.log(value);
  return (
    <DateRange
      rangeColors={['#F43F5E']}
      ranges={[value]}
    //   onChange={handleSelect}
    //   date={value.startDate}
      direction='vertical'
      showDateDisplay={false}
      onChange={handleDateChange}
    //   minDate={value.startDate}
    //   maxDate={value.endDate}
    />
  )
}

export default Calender