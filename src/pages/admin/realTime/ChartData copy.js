import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api2 from '../../../services/api2'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';
import OftadehBarChart from "../../../componets1/OftadehChart/OftadehChart"
import OftadehBarChart1 from "../../../componets1/OftadehChart/OftadehBarChart"
import OftadehChartWeek from "../../../componets1/OftadehChart/OftadehChartWeek"
import OftadehBarChartWeek from "../../../componets1/OftadehChart/OftadehBarChart Week"
import OftadehChartMonth from "../../../componets1/OftadehChart/OftadehChartMonth"
import OftadehBarChartMonth  from "../../../componets1/OftadehChart/OftadehBarChartMonth"
import OftadehChartYear from "../../../componets1/OftadehChart/OftadehChartYear"
import OftadehBarChartYear  from "../../../componets1/OftadehChart/OftadehBarChartYear"
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



const status = [
    {
        value: 'today',
        label: 'Hoje'
    },
    {
        value: 'week',
        label: 'Esta Semana'
    },
    {
      value: 'month',
      label: 'Este Mes'
  },
    {
        value: 'year',
        label: 'Este Ano'
    }
];




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  title: {
    flexGrow: 1,
  },
  
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

}));


export default function UsuarioListage() {
  const classes = useStyles();

  const [usuarios, setUsuarios]= useState([]);


  const [value, setValue] = useState('today');

  useEffect(()=>{
  	async function LoadUsuarios(){

  		const response = await api2.get('/historicoList')
  		setUsuarios(response.data)
  	}
  	LoadUsuarios();
  }, [])


async function handleDelete(id){

	if(window.confirm("Realente deseja excluir este Historico?")){

		var result = await api2.delete('/sensor/delete/'+id)
		if(result.status===200){
			window.location.href=("/admin/sensores")
		}else {

			alert("ocoreu um erro por favor tente novamente")
		}
	}
}

console.log(value)
  return (
    <div className={classes.root}>
      <CssBaseline />
   
      <MenuAdmin title={'HISTORICO'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

                                 
          <Grid container spacing={3}>
           		<Grid item sm={12}>
                       
          		<Paper className={classes.paper}>
                  <Grid item sm={1}>
                                    <TextField
                                         id="outlined-name"
                                         label="Periodo"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        variant="outlined"
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <h2>Grafico de Historico de Temperatura</h2>
                                {value === "today" &&  <OftadehBarChart/>}
                                {value === "week" &&  <OftadehChartWeek/>}
                                {value === "month" &&  <OftadehChartMonth/>}
                                {value === "year" &&  <OftadehChartYear/>}
                                         
                
          		</Paper>

                  
          	
		    </Grid>      
          </Grid>


          <Grid container spacing={3}>
           		<Grid item sm={12}>
          		<Paper className={classes.paper}>

              {value === "today" &&  <OftadehBarChart1/>}
              {value === "week" &&  <OftadehBarChartWeek/>}
              {value === "month" &&  <OftadehBarChartMonth/>}
              {value === "year" &&  <OftadehBarChartYear/>}
                                         
          		</Paper>

                  
          	
		    </Grid>      
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}