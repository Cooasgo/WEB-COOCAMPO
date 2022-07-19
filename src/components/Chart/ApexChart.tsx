import Chart from 'react-apexcharts';
import { options } from '../utils/OptionsChartApex';

const series = [
  {
    name: 'Peso médio do rebanho',
    data: [240, 255, 255, 265, 240, 260, 275, 265],
  },
];

export default function ApexChart() {
  return (
    <Chart options={options} series={series} type={'area'} height={'105%'} />
  );
}
