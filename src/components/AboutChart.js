import React, { useEffect,useState } from "react";
import Chart from 'chart.js/auto';
import '../css/chart.css'

const levels = ["Just Started Out","Did some stuff with it","Doing from quite some time","Pretty Confident","Will do anything you ask","Master"]

function AboutChart({lightMode}) {
  useEffect(()=>{
  const chart = document.getElementById(lightMode?'chart-light':'chart-dark').getContext('2d')
  const myChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: ['HTML5', 'CSS', 'Javascript', 'ReactJs', 'ExpressJs', 'Django','Python',"Flask"],
        datasets: [{
            data: [91,84,86,73,79,77,80,75],
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
              color: lightMode ? "black" : 'white', 
              font:{
                size:16,
              }
            }
          }
          ,y: {
              ticks: {
                  color: lightMode ? "black" : 'white', 
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
  },[lightMode])
  return (
    <div className="chartCard">
      <div className="chartBox">
        {lightMode && <canvas id="chart-light"></canvas>}
        {!lightMode && <canvas id="chart-dark"></canvas>}
      </div>
    </div>
  )
}

export default AboutChart;
