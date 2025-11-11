import { Injectable } from '@nestjs/common';
import { DepositOutput } from './dto/deposit.output';
import depositDummy from './dummy/deposit.dummy.json';


@Injectable()
export class DepositService {
  depositCounter(
    filterMonth: string,
    filterYear: string,
  ): DepositOutput | null {
    let data = depositDummy;

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
