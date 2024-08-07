const formatDate = (dateString) => {
  if (!dateString) return ''; // 빈 문자열 처리
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return ''; // 유효하지 않은 날짜 처리
  // 날짜만 추출하여 형식화
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

const formatDateTime = (dateTime) => {
  const date = new Date(dateTime);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = daysOfWeek[date.getDay()]; // 요일 추출

  return `${year}.${month}.${day}(${dayOfWeek}) ${hours}:${minutes}`;
};

const formatRefundDate = (dateTime) => {
  const date = new Date(dateTime);

  date.setDate(date.getDate() - 7);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

const formatRefundStringDate = (dateTime) => {
  const date = new Date(dateTime);

  date.setDate(date.getDate() - 7);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}년 ${month}월 ${day}일`;
};

export { formatDate, formatDateTime, formatRefundDate, formatRefundStringDate };
