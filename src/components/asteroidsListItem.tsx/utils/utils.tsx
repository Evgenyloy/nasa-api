import { IDistance } from '../../../api/types/types';

export function dateFormatting(approachDate: string) {
  const date = new Date(approachDate.split('-').join()).toLocaleString('ru', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
  return date;
}

export function numberFormatting(distance: string) {
  const formattedDistance = new Intl.NumberFormat('ru').format(
    +parseFloat(distance).toFixed()
  );

  return formattedDistance;
}
