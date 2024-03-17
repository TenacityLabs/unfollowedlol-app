import Chart, { ChartItem } from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

export default function LineChart({chartData, metric, color1, color2, elementId}:any){
    const chartRef = useRef<any>(null);
    const {width, height} = useWindowSize();

    useEffect(() => {
        (() => {
            if (document.getElementById(elementId)) {
                if (chartRef.current) {
                chartRef.current.destroy();
                }
        
                chartRef.current = new Chart(document.getElementById(elementId) as ChartItem, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                    data: [65, 59, 80, 81, 56, 55, 40, 54, 70, 110, 65, 75],
                    fill: true,
                    borderColor: color1,
                    backgroundColor: color2 + "88",
                    tension: 0.2
                    }]
                },
                options: {
                    animation: {
                        duration: 0
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                            title: (context) => {return ""},
                            label: function (context) {
                                return metric + ": " + context.parsed.y;
                            }
                            },
                            displayColors:false
                        }
                    },
                    scales: {
                        y: {
                        position: 'right', 
                        beginAtZero: true,
                        }
                    }
                }
                });
            }
        })()
    }, [chartData, width, height, color1, color2, metric])
        
    return <canvas id={elementId}/>
}