import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Typography from '@material-ui/core/Typography';


// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}



export default function Chart() {
  const theme = useTheme();


  const [tempe, setTempe] = useState();

  var cont = 0;
  
  const data = [
    createData(cont=cont+1, tempe),
    createData(cont=cont+1, tempe),
    createData(cont=cont+1, tempe),
    createData(cont=cont+1, tempe),
    createData(cont=cont+1, tempe),
    
  ];
 

  useEffect(()=>  {


    const socket = io('http://localhost:3006',{transports: ['websocket', 'polling', 'flashsocket']})

    socket.on('tempe', (temperature)=>{

      setTempe(temperature);
    });


  }, [])

  return (
    <React.Fragment>
       <Typography component="h1" variant="h5">
        
        </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Temperatura
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}