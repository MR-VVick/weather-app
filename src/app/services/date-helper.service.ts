import { Injectable } from '@angular/core';
import { format, parseISO, isValid } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DateHelperService {

  private parseDateString(dateString: string): Date | null {
    if (!dateString) {
      return null;
    }
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-');
    const [hour, minute] = timePart.split(':');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute)); // Create Date object
    return isNaN(date.getTime()) ? null : date;
  }

  formatDate(dateString: string): string {
    const date = this.parseDateString(dateString);
    return date && isValid(date) ? format(date, 'EEEE do MMMM, yyyy') : '';
  }

  formatDay(dateString: string): string {
    const date =  parseISO(dateString);
    return date && isValid(date) ? format(date, 'EEE') : '';
  }

  formatShortDate(dateString: string): string {
    const date =  parseISO(dateString);
    return date && isValid(date) ? format(date, 'd/M') : '';
  }
}
