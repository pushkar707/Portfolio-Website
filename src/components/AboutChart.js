import React, { useEffect,useState } from "react";
import Chart from 'chart.js/auto';
import '../css/chart.css'

const levels = ["Just Started Out","Did some stuff with it","Doing from quite some time","Pretty Confident","Will do anything you ask","Master"]

function AboutChart() {
  useEffect(()=>{
  const chart = document.getElementById('chart').getContext('2d')
  const myChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: ['HTML5', 'CSS', 'Javascript', 'ReactJs', 'ExpressJs', 'MongoDb','Python',"Flask"],
        datasets: [{
            data: [81,78,76,58,70,53,70,52],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      plugins:{
        legend:{
          display:false,
        }
      },
      events:[],
      scales: {
          x:{
            ticks:{
              font:{
                size:16
              }
            }
          }
          ,y: {
              ticks: {
                  font:{
                    size:16
                  },
                  maxTicksLimit:6,
                  callback: function(val,index){
                    return levels[index]
                  },
                //   color:'#6c7983',
              },
          }
      }
  }
    });
  },[])
  return (
    <div className="chartCard">
      <div className="chartBox">
        <canvas id="chart"></canvas>
      </div>
    </div>
  )
}

export default AboutChart;
