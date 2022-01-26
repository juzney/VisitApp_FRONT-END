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
import api from '../../../services/api'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



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

  const [visitantes, setVisitantes]= useState([]);
  const [empresaVisitantes, setEmpresaVisitantes]= useState([]);

  useEffect(()=>{
  	async function LoadUsuarios(){

  		const response = await api.get('/visitante/list/marcada')
  		setVisitantes(response.data)
  	}
  	LoadUsuarios();
  }, [])


  useEffect(()=>{
	async function LoadUsuarios1(){

		const response = await api.get('/empresaVisitante/list/marcada')
		setEmpresaVisitantes(response.data)
	}
	LoadUsuarios1();
}, [])

async function handleDelete(id){

	if(window.confirm("Realente deseja excluir este Usuario?")){

		var result = await api.delete('/visitante/delete/'+id)
		if(result.status===200){
			window.location.href=("/admin/visitantes")
		}else {

			alert("ocoreu um erro por favor tente novamente")
		}
	}
}


async function handleDelete1(id){

	if(window.confirm("Realente deseja excluir este Usuario?")){

		var result = await api.delete('/empresaVisitante/delete/'+id)
		if(result.status===200){
			window.location.href=("/admin/visitantes")
		}else {

			alert("ocoreu um erro por favor tente novamente")
		}
	}
}


const theme = useTheme();

const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

const handleChangeIndex = (index) => {
  setValue(index);
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
				  <Grid item xs={12} sm={1}>
					          	 <Button variant="contained" href='/admin/visitas/cadastrar' color="primary" >
      								Cadastrar
    							  </Button>
					        </Grid>
							

          			<h2>Visitas Marcadas</h2>
					  <h2></h2>



					  <AppBar position="static" color="default">
        <Tabs
          value={value}
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
        index={value}
        onChangeIndex={handleChangeIndex}
      >




<TabPanel value={value} index={0} dir={theme.direction}>
	          		 <Grid container spacing={2}>
			          		<Grid item xs={12} sm={12}>
							
							
					         	 <TableContainer component={Paper}>
							      <Table className={classes.table} size="small" aria-label="a dense table">
							        <TableHead>
							          <TableRow>
							            <TableCell>Nome da Empresa</TableCell>
							           
							          
							            <TableCell align="center">NUIT</TableCell>
										<TableCell align="center">Data da Visita</TableCell>
							            <TableCell align="right">Estado da VIsita</TableCell>
										
							          </TableRow>
							        </TableHead>
							        <TableBody>
							      		{empresaVisitantes.map((row) => (
							            <TableRow key={row._id}>
							              <TableCell component="th" scope="row">
							                {row.nomeEmpresa}
							              </TableCell>
							              <TableCell align="center"> {row.numDoc} </TableCell>
							             
                            <TableCell align="center">{row.dataVisita}: {row.horaVisita}</TableCell>
							<TableCell align="center">{row.status}</TableCell>
							              <TableCell align="right">

							              	<ButtonGroup aria-label="outlined secondary button group">
											  <Button color="primary" href={'/admin/visitas/editar/'+row._id} >Detalhes</Button>
											  <Button color="secondary" onClick={()=> handleDelete1(row._id)} >Excluir</Button>
											  
											</ButtonGroup>

							              </TableCell>
							            </TableRow>
							          ))}
							     
							        </TableBody>
							      </Table>
							    </TableContainer>
					        </Grid>
					        
					        
			        </Grid>
					</TabPanel>




					<TabPanel value={value} index={1} dir={theme.direction}>
	          		 <Grid container spacing={2}>
			          		<Grid item xs={12} sm={12}>
							
							
					         	 <TableContainer component={Paper}>
							      <Table className={classes.table} size="small" aria-label="a dense table">
							        <TableHead>
							          <TableRow>
							            <TableCell>Nome do Representante</TableCell>
							           
							          
							            <TableCell align="center">Documento</TableCell>
										<TableCell align="center">Data da Visita</TableCell>
							            <TableCell align="right">Estado da VIsita</TableCell>
										
							          </TableRow>
							        </TableHead>
							        <TableBody>
							      		{visitantes.map((row) => (
							            <TableRow key={row._id}>
							              <TableCell component="th" scope="row">
							                {row.nomeRepresentante}
							              </TableCell>
							              <TableCell align="center">{row.tipoDocumento}: {row.numDoc} </TableCell>
							             
                            <TableCell align="center">{row.dataVisita}: {row.horaVisita}</TableCell>
							<TableCell align="center">{row.status}</TableCell>
							              <TableCell align="right">

							              	<ButtonGroup aria-label="outlined secondary button group">
											  <Button color="primary" href={'/admin/visitas/editar/'+row._id} >Detalhes</Button>
											  <Button color="secondary" onClick={()=> handleDelete(row._id)} >Excluir</Button>
											  
											</ButtonGroup>

							              </TableCell>
							            </TableRow>
							          ))}
							     
							        </TableBody>
							      </Table>
							    </TableContainer>
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