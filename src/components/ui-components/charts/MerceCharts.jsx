import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { barData, lineData } from "./chart-data";

export function ProductViewsChart() {
  return (
    <div>
      <Chart type="bar" data={barData} />
    </div>
  );
}

export function IncomeChart () {
    return (
        <div className='mt-6'>
          <Chart type="line" data={lineData} />
        </div>
      );
}
