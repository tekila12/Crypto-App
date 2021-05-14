import React, { useRef, useEffect, useState } from "react";
import { historyOptions } from '../chartConfig/chartConfig';
import Chart from 'chart.js/auto';



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

  // remove the canvas whenever timeFormat changes
  useEffect(() => {
    setIsRebuildingCanvas(true);
  }, [timeFormat]); // timeFormat must be present in deps array for this to work

  /* if isRebuildingCanvas was true for the latest render, 
    it means the canvas element was just removed from the dom. 
    set it back to false to immediately re-create a new canvas */
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
            backgroundColor:  "rgba(174, 305, 194, 0.5)",
            borderColor: "rgba(174, 305, 194, 0.4",
            pointRadius: 0,
          },
        ],
      },
      options: {
        historyOptions
      },
    });
    return () => {
      chartInstance.destroy();
    }
  }}, [day, isRebuildingCanvas,timeFormat, week, year, detail]);
 
  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="">${detail.current_price.toFixed(2)}</p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text__danger "
                : "text__success "
            }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };
  
  return (
    <>
    {renderPrice()}
      {isRebuildingCanvas ? undefined : (
        <canvas ref={chartCanvasRef} id='myChart' width={250} height={250} />
      )}
      <button onClick={() => setTimeFormat("24h")}>24h</button>
      <button onClick={() => setTimeFormat("7d")}>7d</button>
      <button onClick={() => setTimeFormat("1y")}>1y</button>
    </>
  );
};

export default ChartData;