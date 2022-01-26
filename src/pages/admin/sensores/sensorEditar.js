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
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import {useParams} from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


  
  


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

  const [nomeRepresentante, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [proveniencia, setProveniencia] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numDoc, setNumDoc] = useState('');
  const [descricaoVisita, setDescricaoVisita] = useState('');
  const [numVisitantes, setNumVisitantes] = useState('');
  const [dataVisita, setDataVisita] = useState('');
  const [horaVisita, setHoraVisita] = useState('');
  const [outrosVistitantes, setOutrosVistitantes] = useState('');
  const [dadosVeiculo, setDadosVeiculo] = useState('');
  const [status, setStatus] = useState('');






const [nomeEmpresa, setNomeEmpresa] = useState('');



const [proveniencia1, setProveniencia1] = useState('');

const [numDoc1, setNumDoc1] = useState('');
const [descricaoVisita1, setDescricaoVisita1] = useState('');
const [numVisitantes1, setNumVisitantes1] = useState('');
const [dataVisita1, setDataVisita1] = useState('');
const [horaVisita1, setHoraVisita1] = useState('');
const [outrosVistitantes1, setOutrosVistitantes1] = useState('');
const [dadosVeiculo1, setDadosVeiculo1] = useState('');
const [status1, setStatus1] = useState('');

const {idSensor} = useParams();



  useEffect(()=>{

  		async function getSensor1() {
  			
  		
        var response = await api.get('/visitante/'+idSensor)

  		setNome(response.data.nomeRepresentante);
  		setSexo(response.data.sexo);
  		setProveniencia(response.data.proveniencia);
        setNumDoc(response.data.numDoc);
        setDescricaoVisita(response.data.descricaoVisita);
        setNumVisitantes(response.data.numVisitantes);
        setDataVisita(response.data.dataVisita);
        setHoraVisita(response.data.horaVisita);
        setOutrosVistitantes(response.data.outrosVistitantes);
        setDadosVeiculo(response.data.dadosVeiculo);
        setStatus(response.data.status);
   
		
  		}

  		getSensor1();
  }, [])

  useEffect(()=>{

    async function getSensor() {
      
      var response = await api.get('/empresaVisitante/'+idSensor)

      setNomeEmpresa(response.data.nomeEmpresa);
      setProveniencia1(response.data.proveniencia);
      setNumDoc1(response.data.numDoc);
      setDescricaoVisita1(response.data.descricaoVisita);
      setNumVisitantes1(response.data.numVisitantes);
      setDataVisita1(response.data.dataVisita);
      setHoraVisita1(response.data.horaVisita);
      setOutrosVistitantes1(response.data.outrosVistitantes);
      setDadosVeiculo1(response.data.dadosVeiculo);
      setStatus1(response.data.status);
  
    }

    getSensor();
}, [])




  async function handleSubmit1(){

  	const data = {
        nomeEmpresa: nomeEmpresa,
        numDoc: numDoc1,
          proveniencia: proveniencia1,
          descricaoVisita: descricaoVisita1,
          numVisitantes: numVisitantes1,
          dataVisita: dataVisita1,
          horaVisita: horaVisita1,
          outrosVistitantes: outrosVistitantes1,
          dadosVeiculo: dadosVeiculo1,
          status: status1,
  		    _id:idSensor
  	}

  	const response = await api.put('/empresaVisitante/update/'+idSensor, data)

  	if(response.status===200){
  		window.location.href= "/admin/visitas";
  	}

  	else{
  		alert('Falha ao actualizar sensor')
  	}
  }




  async function handleSubmit(){

  	const data = {
      nomeRepresentante: nomeRepresentante,
      sexo: sexo,
      proveniencia: proveniencia,
      tipoDocumento: tipoDocumento,
      numDoc: numDoc,
      descricaoVisita: descricaoVisita,
      numVisitantes: numVisitantes,
      dataVisita: dataVisita,
      horaVisita: horaVisita,
      outrosVistitantes: outrosVistitantes,
      dadosVeiculo: dadosVeiculo,
      status: status,
  	 _id:idSensor
  	}

  	const response = await api.put('/visitante/update/'+idSensor, data)

  	if(response.status===200){
  		window.location.href= "/admin/visitas";
  	}

  	else{
  		alert('Falha ao actualizar sensor')
  	}
  }



  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
      <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
      >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </Typography>
    );
    }
    
    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    };
    
    function a11yProps(index) {
    return {
      id: `action-tab-${index}`,
      'aria-controls': `action-tabpanel-${index}`,
    };
    }
    
    const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
    };
    
    const fabGreenStyle = {
    color: 'common.white',
    bgcolor: green[500],
    '&:hover': {
      bgcolor: green[600],
    },
    };


  const theme = useTheme();

  const [value1, setValue1] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue1(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue1(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];


  return (
    <div className={classes.root}>
      <CssBaseline />
   
      <MenuAdmin title={'VISITAS'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          <Grid container spacing={3}>

          	<Grid item sm={12}>
            <Paper className={classes.paper}>

	<h2>Actualizar Visita</h2>
<h2> </h2>
<AppBar position="static" color="default">
        <Tabs
          value={value1}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Empressas" {...a11yProps(0)} />
          <Tab label="Pessoas Singulares" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value1}
        onChangeIndex={handleChangeIndex}
      >




<TabPanel value={value1} index={0} dir={theme.direction}>
	          		 <Grid container spacing={3} >
			          		<Grid item xs={12} sm={8}>
					          <TextField
							 	 disabled
					            required
					            id="nomeEmpresa"
					            name="nomeEmpresa"
					            label="Nome da Empresa"
					            fullWidth
					            autoComplete="nomeEmpresa"
					            value={nomeEmpresa}
					            onChange={e=> setNomeEmpresa(e.target.value)}
					          />
					        </Grid>
                  
						
							<Grid item xs={12} sm={4}>
					          <TextField
							  disabled
					            required
					            id="numDoc1"
					            name="numDoc1"
					            label="Numero de NUIT"
					            fullWidth
					            autoComplete="numDoc1"
					              value={numDoc1}
					            onChange={e=> setNumDoc1(e.target.value)}
					          />
					        </Grid>

							<Grid item xs={12} sm={4}>
					          <TextField
							  disabled
					            required
					            id="proveniencia1"
					            name="proveniencia1"
					            label="Proveniencia"
					            fullWidth
					            autoComplete="proveniencia1"
					              value={proveniencia1}
					            onChange={e=> setProveniencia1(e.target.value)}
					          />
					        </Grid>


				
							<Grid item xs={12} sm={4}>
					          <TextField
							  disabled
					            required
					            id="numVisitantes1"
					            name="numVisitantes1"
					            label="Numero de Visitantes"
					            fullWidth
					            autoComplete="numVisitantes1"
					              value={numVisitantes1}
					            onChange={e=> setNumVisitantes1(e.target.value)}
					          />
					        </Grid>

							<Grid item xs={12} sm={4}>
					          <TextField
							  disabled
					            required
					            id="dataVisita1"
					            name="dataVisita1"
					            label="Data Visita"
					            fullWidth
					            autoComplete="dataVisita"
					              value={dataVisita1}
					            onChange={e=> setDataVisita1(e.target.value)}
					          />
					        </Grid>

							<Grid item xs={12} sm={12}>
					          <TextField
					            disabled
					            id="descricaoVisita1"
					            name="descricaoVisita1"
					            label="Descrição da Visita"
					            fullWidth
					            autoComplete="descricaoVisita1"
					              value={descricaoVisita1}
					            onChange={e=> setDescricaoVisita1(e.target.value)}
					          />
					        </Grid>

							<Grid item xs={12} sm={4}>
					          <TextField
							  disabled
					            required
					            id="horaVisita1"
					            name="horaVisita1"
					            label="Hora da Visita"
					            fullWidth
					            autoComplete="horaVisita1"
					              value={horaVisita1}
					            onChange={e=> setHoraVisita1(e.target.value)}
					          />
					        </Grid>

							<Grid item xs={12} sm={4}>
					           <FormControl className={classes.formControl} fullWidth>
							        <InputLabel id="status">Estado da Visita</InputLabel>
							        <Select
									
							          labelId="status"
							          id="status"
							         value={status1}
							        
					            		onChange={e=> setStatus1(e.target.value)}
							        >
							          <MenuItem value={"Marcada"}>Marcada</MenuItem>
									  <MenuItem value={"Cancelada"}>Cancelada</MenuItem>
									  <MenuItem value={"Adiada"}>Adiada</MenuItem>
									  
							        </Select>
							    </FormControl>
					        </Grid>

							<Grid item xs={12} sm={12}>
					          <TextField
							 	
					            id="outrosVistitantes1"
					            name="outrosVistitantes1"
					            label="Preenha Nomes de outros Acompanhantes "
					            fullWidth
					            autoComplete="outrosVistitantes1"
					            value={outrosVistitantes1}
								onChange={e=> setOutrosVistitantes1(e.target.value)}
					          />
					        </Grid>
							<Grid item xs={12} sm={12}>
					          <TextField
							 	 
					         
					            id="dadosVeiculo1"
					            name="dadosVeiculo1"
					            label="Prencha os Dados do Veiculo(Marca, Matricula, Cor)"
					            fullWidth
					            autoComplete="dadosVeiculo1"
					            value={dadosVeiculo1}
								onChange={e=> setDadosVeiculo1(e.target.value)}
					          />
					        </Grid>



					         <Grid item xs={12} sm={3}>
					          	 <Button variant="contained" color="primary" onClick={handleSubmit1}>
      								  Actualizar
    							  </Button>
					        </Grid>
			        </Grid>

					</TabPanel>



					<TabPanel value={value1} index={1} dir={theme.direction}>
	          		 <Grid container spacing={3} >
			          		<Grid item xs={12} sm={8}>
					          <TextField
							  disabled
					            required
					            id="nomeRepresentante"
					            name="nomeRepresentante"
					            label="Nome do Representante"
					            fullWidth
					            autoComplete="nomeRepresentante"
					            value={nomeRepresentante}
					            onChange={e=> setNome(e.target.value)}
					          />
					        </Grid>
						
							<Grid item xs={12} sm={4}>
					           <FormControl className={classes.formControl} fullWidth>
							        <InputLabel id="sexo">Sexo</InputLabel>
							        <Select
									disabled
							          labelId="sexo"
							          id="sexo"
							         value={sexo}
							        
					            		onChange={e=> setSexo(e.target.value)}
							        >
							          <MenuItem value={"M"}>Masculino</MenuItem>
							          <MenuItem value={"F"}>Femenino</MenuItem>
									  
							        
							        </Select>
							    </FormControl>
					        </Grid>
					
							<Grid item xs={12} sm={4}>
					          <TextField
							  disabled
					            required
					            id="proveniencia"
					            name="proveniencia"
					            label="Proveniencia"
					            fullWidth
					            autoComplete="proveniencia"
					              value={proveniencia}
					            onChange={e=> setProveniencia(e.target.value)}
					          />
					        </Grid>

							<Grid item xs={12} sm={4}>
					           <FormControl className={classes.formControl} fullWidth>
							        <InputLabel id="tipoDocumento">Documento</InputLabel>
							        <Select
									disabled
							          labelId="tipoDocumento"
							          id="tipoDocumento"
							         value={tipoDocumento}
							        
					            		onChange={e=> setTipoDocumento(e.target.value)}
							        >
							          <MenuItem value={"BI"}>BI</MenuItem>
							          <MenuItem value={"NUIT"}>NUIT</MenuItem>
									  <MenuItem value={"Carta"}>Carta</MenuItem>
									  <MenuItem value={0}>Passaporte</MenuItem>
									  
							        
							        </Select>
							    </FormControl>
					        </Grid>

							<Grid item xs={12} sm={4}>
					          <TextField
							  disabled
					            required
					            id="numDoc"
					            name="numDoc"
					            label="Numero de Documento"
					            fullWidth
					            autoComplete="numDoc"
					              value={numDoc}
					            onChange={e=> setNumDoc(e.target.value)}
					          />
					        </Grid>

					        <Grid item xs={12} sm={12}>
					          <TextField
					            disabled
					            id="descricaoVisita"
					            name="descricaoVisita"
					            label="Descrição da Visita"
					            fullWidth
					            autoComplete="descricaoVisita"
					              value={descricaoVisita}
					            onChange={e=> setDescricaoVisita(e.target.value)}
					          />
					        </Grid>
							



							<Grid item xs={12} sm={4}>
					          <TextField
							  disabled
					            required
					            id="numVisitantes"
					            name="numVisitantes"
					            label="Numero de Visitantes"
					            fullWidth
					            autoComplete="numVisitantes"
					              value={numVisitantes}
					            onChange={e=> setNumVisitantes(e.target.value)}
					          />
					        </Grid>

							<Grid item xs={12} sm={4}>
					          <TextField
							  disabled
					            required
					            id="dataVisita"
					            name="dataVisita"
					            label="Data Visita"
					            fullWidth
					            autoComplete="dataVisita"
					              value={dataVisita}
					            onChange={e=> setDataVisita(e.target.value)}
					          />
					        </Grid>


							<Grid item xs={12} sm={4}>
					          <TextField
							  disabled
					            required
					            id="horaVisita"
					            name="horaVisita"
					            label="Hora da Visita"
					            fullWidth
					            autoComplete="horaVisita"
					              value={horaVisita}
					            onChange={e=> setHoraVisita(e.target.value)}
					          />
					        </Grid>

							<Grid item xs={12} sm={4}>
					           <FormControl className={classes.formControl} fullWidth>
							        <InputLabel id="status">Estado da Visita</InputLabel>
							        <Select
									
							          labelId="status"
							          id="status"
							         value={status}
							        
					            		onChange={e=> setStatus(e.target.value)}
							        >
							          <MenuItem value={"Marcada"}>Marcada</MenuItem>
									  <MenuItem value={"Cancelada"}>Cancelada</MenuItem>
									  <MenuItem value={"Adiada"}>Adiada</MenuItem>
							       
									  
							        </Select>
							    </FormControl>
					        </Grid>

							<Grid item xs={12} sm={12}>
					          <TextField
							
					            id="outrosVistitantes"
					            name="outrosVistitantes"
					            label="Preenha Nomes de outros Acompanhantes "
					            fullWidth
					            autoComplete="outrosVistitantes"
					            value={outrosVistitantes}
					            onChange={e=> setOutrosVistitantes(e.target.value)}
					          />
					        </Grid>
							<Grid item xs={12} sm={12}>
					          <TextField
							 	 
					            
					            id="dadosVeiculo"
					            name="dadosVeiculo"
					            label="Prencha os Dados do Veiculo(Marca, Matricula, Cor)"
					            fullWidth
					            autoComplete="dadosVeiculo"
					            value={dadosVeiculo}
					            onChange={e=> setDadosVeiculo(e.target.value)}
					          />
					        </Grid>
							


					         <Grid item xs={12} sm={3}>
					          	 <Button variant="contained" color="primary" onClick={handleSubmit}>
      								  Actualizar
    							  </Button>
					        </Grid>
			        </Grid>

					</TabPanel>



					</SwipeableViews>
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