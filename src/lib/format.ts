/** "1:05", "12:52" — 12-hour clock, no leading zero on the hour, no AM/PM (matches the design). */
export function formatClock(date: Date): string {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours12}:${minutes}`;
}
