import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

function Deposits() {
 
  const [tempe, setTempe] = useState();
 

  useEffect(()=>  {


    const socket = io('http://localhost:3006',{transports: ['websocket', 'polling', 'flashsocket']})

    socket.on('tempe', (temperature)=>{

      setTempe(temperature);
    });


  }, [])


  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Temperatura
        </Typography>
      <Typography component="p" variant="h4">
        {tempe} ºC
      </Typography>
      <Typography color="textSecondary" >
      21 de Outubro de 2021
      </Typography>
      
    </React.Fragment>
  );
}


export default Deposits;