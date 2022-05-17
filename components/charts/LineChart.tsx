import React, { useRef, useEffect, useState } from 'react';
import type { ChartData, ChartArea } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  LineController
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from "@faker-js/faker"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Tooltip,
  Legend
);

const labels = ['-1', '0',  '1'];
const colors = [
  '#FF4967',
  '#FFA726',
  '#56D9FE',

];


export const options = {
  plugins: {
    legend: {
      display: false
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      display: false

    },
    x: {
      // display: false
      grid: {
        color: "#595959"
      }
    },
  }
}

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = colors[0];
  const colorMid = colors[1]
  const colorEnd = colors[2]

  const gradient = ctx.createLinearGradient(0, area.top, 550, area.bottom);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}


type Props = {
  dataGraph:any
}

export function LineChart({dataGraph}:Props) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataGraph.map((item:any) => item.unit_price),
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  };
  
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea),
       

      })),
    };

    setChartData(chartData);
  }, []);

  return <Chart ref={chartRef} type='line' data={chartData} options={options} />;
}
