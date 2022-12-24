import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { barData, lineData, customersData, trafficData, deviceData } from "./chart-data";

export function ProductViewsChart() {
  return (
    <div>
      <Chart type="bar" data={barData} />
    </div>
  );
}

export function TrafficChannelChart() {
  return (
    <div>
      <Chart type="bar" data={trafficData} />
    </div>
  );
}

export function TopDeviceChart() {
  return (
    <div>
      <Chart type="doughnut" data={deviceData} />
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

export function CustomerChart () {
  return (
      <div className='mt-6'>
        <Chart type="line" data={customersData} />
      </div>
    );
}

