import { theme } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';

export const options: ApexOptions = {
  chart: {
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000,
      },
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },

  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    // enabled: false,
    theme: 'dark',
  },
  xaxis: {
    type: 'category',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    categories: ['a', 'b'],
  },

  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
