import { Injectable } from '@nestjs/common';
import registrationDummy from './dummy/registration.dummy.json';
import { RegistrationOutput } from './dto/registration.output';

@Injectable()
export class RegistrationService {
  registrationCounter(
    filterMonth: string,
    filterYear: string,
  ): RegistrationOutput | null {
    let data = registrationDummy;

    // filter by month
    if (filterMonth && filterMonth != "0") {
      const monthNum = Number(filterMonth);
      data = data.filter(
        (item) => new Date(item.date).getMonth() + 1 === monthNum,
      );
    }

    // filter by year
    if (filterYear && filterYear != "0") {
      const yearNum = Number(filterYear);
      data = data.filter(
        (item) => new Date(item.date).getFullYear() === yearNum,
      );
    }

    const totalValue = data.reduce((acc, item) => acc + item.value, 0);
    const count = data.length;

    return { totalValue, count };
  }
}
