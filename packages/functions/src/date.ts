import { subDays, addDays as addDaysOld } from 'date-fns';

export function addDays(date: number | Date, amount: number) {
  return addDaysOld(date, amount);
}

export { subDays };
