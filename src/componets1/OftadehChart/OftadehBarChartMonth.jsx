
import React, {  useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import api2 from '../../services/api2'

export default function UsuarioListage() {
const [usuarios, setUsuarios]= useState([]);

const [temperatura, setTemperatura] = useState([])
const [hora, setHora] = useState([])


  useEffect(()=>{
  const	LoadUsuarios = async()=>{

   

  	await api2.get('/historicoList').then(response=>{
        setUsuarios(response.data)
      })

     
  	}
  	LoadUsuarios();
  }, [])

  let temp = [];
  let time = [];
  let dat = [];
  for(const dataobj of usuarios){
    temp.push(dataobj.Temperature)
    time.push(dataobj.Hora)
    dat.push(dataobj.Data)
  }



   const data ={
          labels: dat,
        datasets: [
          {
            label: "Temperatura",
            data: temp,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3
          }
        ]
      }
 
 
  
      return (
        <>
          {/* <div style={{ width: "50%", height: "90%" }}> */}
          <Bar
            data={data}
            // width={50}
            height={55}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              legend: {
                display: false
              },
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      display: false
                    }
                  }
                ]
              }
            }}
          />
        </>
      );



}

