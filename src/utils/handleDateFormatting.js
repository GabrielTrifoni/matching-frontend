export function formatDate(dateString) {
  const date = new Date(dateString);
  
  const utc3Offset = -3;
  const adjustedDate = new Date(date.getTime() + utc3Offset * 60 * 60 * 1000);

  const day = adjustedDate.getUTCDate();
  const month = adjustedDate.toLocaleString('pt-BR', { month: 'long' });
  const year = adjustedDate.getUTCFullYear().toString().slice(-2);
  const hours = String(adjustedDate.getUTCHours()).padStart(2, '0');
  const minutes = String(adjustedDate.getUTCMinutes()).padStart(2, '0');

  return `${day} de ${month} de ${year}, às ${hours}:${minutes}`;
}