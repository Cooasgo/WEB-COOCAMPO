import Chart from 'react-apexcharts';
import { options } from '../utils/OptionsChartApex';

export default function ApexChart() {
  return (
    <Chart options={options} series={series} type={'area'} height={'95%'} />
  );
}
