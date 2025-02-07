import { Pipe, PipeTransform } from '@angular/core';
import {formatDistance} from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value); //validar la fecha en que se agrego
    const today = new Date();// fehca al dia
    return formatDistance(today, date); //calcular el tiempo entre las dos fechas
  }

}
