import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap'

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '# of Blue Votes',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '# of Green Votes',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

function StackedBar(props){
    if(!props.isLoggedIn){
        return null;
    }
    return (
        <>
        <Card  style={{
                    height: "600px",
                    width: '1000px',

                    position: 'fixed',
                    top: '10%',
                    left: '10%',
                    margin: '20px 50px',
                  
        }}>
        <Card.Title>
        <div className='header'>
          <h1 className='title'>Stacked Bar Chart</h1>
          <div className='links'>
            <a
              className='btn btn-gh'
              href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/StackedBar.js'
            >
              Github Source
            </a>
          </div>
        </div>
        </Card.Title> 
        <Card.Body>
            <Bar data={data} options={options} />
        </Card.Body>
       
        
        </Card>
        
      </>
    )
}
    
 


export default StackedBar;