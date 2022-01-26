import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import api from '../../../services/api'
import {useParams} from 'react-router-dom'

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
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

}));

 
export default function UsuariosCadastrar() {
	const classes = useStyles();
  
	const [nomesensor, setNome] = useState('');
	const [area, setArea] = useState('');
	const [tipo, setTipo] = useState('');
	const [localizacao, setLocalizacao] = useState('');
	const [descricao, setDescricao] = useState('');
  
	const {idSensor} = useParams();
  
	useEffect(()=>{
  
			async function getSensor() {
				
				var response = await api.get('/visitante/'+idSensor)
  
				setNome(response.data.nomeSensor);
				setArea(response.data.area);
				setTipo(response.data.tipo);
				setLocalizacao(response.data.localizacao);
			  setDescricao(response.data.descricao);
		  
			}
  
			getSensor();
	}, [])
  
  
console.log(idSensor);

  return (
    <div className={classes.root}>
      <CssBaseline />
   
      <MenuAdmin title={'Usuarios'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          <Grid container spacing={3}>

          	<Grid item sm={12}>
			  <Paper className={classes.paper}>

<h2>Actualizar Usuarios</h2>


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