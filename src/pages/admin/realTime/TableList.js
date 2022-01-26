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
import MUIDataTable from "mui-datatables";

 

const options = {
  filterType: 'checkbox',
};


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

  useEffect(()=>{
  const	LoadUsuarios = async()=>{

  	await api2.get('/historicoList').then(response=>{
        setUsuarios(response.data)
      })

      
  	}
  	LoadUsuarios();
  }, [])

console.log(usuarios);

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

const columns = [
  {
   name: "Temperature",
   label: "Temperatura",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "Humidity",
   label: "Humidade",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "Data",
   label: "Data",
   options: {
    filter: true,
    sort: false,
   }
  },

  {
      name: "Hora",
      label: "Hora",
      options: {
       filter: true,
       sort: false,
      }
     },
 ];

 


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
                  
                  <MUIDataTable 
                        title={"Historico de Monitoramento"} 
                        data={usuarios} 
                        columns={columns} 
                        options={options} 
                    />
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