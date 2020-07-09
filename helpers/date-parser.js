/* eslint-disable camelcase */
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function format_D_MMM_YYYY(year, month, day) {
  const slicedDay = (day < 10) ? day.slice(1) : day;
  return `${slicedDay} ${month.slice(0, 3)}, ${year}`;
}

function format_MMM_DD_YYYY(year, month, day) {
  return `${month.slice(0, 3)} ${day}, ${year}`;
}

function format_MMMM_DD_YYYY(year, month, day) {
  return `${month} ${day} ${year}`;
}

function dateParse(date, format) {
  const [year, month, day] = date.split('-');
  const parseMonth = month < 10 ? month[1] : month;
  // if the moth = 01,02,03 return 1,2,3 ;
  const actualMonth = months[parseMonth - 1];

  switch (format) {
    case 'D MMM YYYY':
      return format_D_MMM_YYYY(year, actualMonth, day);
    case 'MMM DD YYYY':
      return format_MMM_DD_YYYY(year, actualMonth, day);
    case 'MMMM DD YYYY':
      return format_MMMM_DD_YYYY(year, actualMonth, day);
    default:
      throw new Error(
        'available formats is (D MMM YYY, MMM DD YYYY, MMMM DD YYYY)',
      );
  }
}

export default dateParse;
