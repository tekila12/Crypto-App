import React, { useRef, useEffect, useState } from "react";
import 'chartjs-adapter-moment';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
Chart.register(annotationPlugin);



const determineTimeFormat = (
  timeFormat: string,
  day: any,
  week: any,
  year: any
) => {
  switch (timeFormat) {
    case "24h":
      return day;
    case "7d":
      return week;
    case "1y":
      return year;
    default:
      return day;
  }
};

interface Props {
  data: any
}

const ChartData: React.FC<Props> = ({ data }) => {
  const chartCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");
  const [isRebuildingCanvas, setIsRebuildingCanvas] = useState(false);
  
 

  useEffect(() => {
    setIsRebuildingCanvas(true);
  }, [timeFormat]);

  useEffect(() => {
    if (isRebuildingCanvas) {
      setIsRebuildingCanvas(false);
    }
  }, [isRebuildingCanvas]);

  useEffect(() => {
      if (chartCanvasRef && chartCanvasRef.current && detail) {
    const chartCanvas = chartCanvasRef.current
    if (isRebuildingCanvas || !chartCanvas) {
      return;
    }
  
    const chartInstance = new Chart(chartCanvasRef.current, {
      type: "line",
      data: {
        datasets: [
          {
            label: `${detail.name} price`,
            data: determineTimeFormat(timeFormat, day, week, year),
            backgroundColor: "rgba(134,159,152, 1)",
            borderColor: "rgba(174, 305, 194, 0.4",

          },        
        ],
      },
      options: {     
        plugins: {
          annotation: {
            annotations: {
           
            }
          }
        },
      
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: 
            {         
              type: 'time',
            },  
        },
      }
    });
    return () => {
      chartInstance.destroy();
    }
  }}, [day, isRebuildingCanvas,timeFormat, week, year, detail]);
 
  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="">${detail.current_price}</p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text__danger "
                : "text__success "
            }
          >
            {detail.price_change_percentage_24h}%
          </p>
        </>
      );
    }
  };
  
  return (
    <div className='chart__container'>
    {renderPrice()}
      {isRebuildingCanvas ? undefined : (
        <canvas ref={chartCanvasRef}  width={250} height={250} id='myChart'></canvas>
      )}
      <button className='time__format' onClick={() => setTimeFormat("24h")}>24h</button>
      <button className='time__format' onClick={() => setTimeFormat("7d")}>7d</button>
      <button className='time__format'  onClick={() => setTimeFormat("1y")}>1y</button>
    </div>
  );
};

export default ChartData;