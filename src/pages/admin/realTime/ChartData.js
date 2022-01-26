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
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';


import OftadehBarChart2 from "../../../componets1/OftadehChartHum/OftadehChart"
import OftadehBarChart3 from "../../../componets1/OftadehChartHum/OftadehBarChart"
import OftadehChartWeek2 from "../../../componets1/OftadehChartHum/OftadehChartWeek"
import OftadehBarChartWeek2 from "../../../componets1/OftadehChartHum/OftadehBarChart Week"
import OftadehChartMonth2 from "../../../componets1/OftadehChartHum/OftadehChartMonth"
import OftadehBarChartMonth2 from "../../../componets1/OftadehChartHum/OftadehBarChartMonth"
import OftadehChartYear2 from "../../../componets1/OftadehChartHum/OftadehChartYear"
import OftadehBarChartYear2  from "../../../componets1/OftadehChartHum/OftadehBarChartYear"
import { useReactToPrint } from "react-to-print";




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

h5: {
    justify: 'left',
    align_item: 'left'
  },
}));


export default function UsuarioListage() {
  const classes = useStyles();

  const [usuarios, setUsuarios]= useState([]);


  const [value1, setValue1] = useState('today');

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




console.log(value1)
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
              
              <h2>Gráfico  de Historico de Monitoramento</h2>
              <h5></h5>
             
                  <Grid item sm={1}>
                                    <TextField
                                         id="outlined-name"
                                         label="Periodo"
                                        select
                                        value={value1}
                                        onChange={(e) => setValue1(e.target.value)}
                                        variant="outlined"
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                               
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
          <Tab label="Temperatura" {...a11yProps(0)} />
          <Tab label="Humidade" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <h5>Gráfico  Liner</h5>
                               {value1 === "today" &&  <OftadehBarChart/>}
                                {value1 === "week" &&  <OftadehChartWeek/>}
                                {value1 === "month" &&  <OftadehChartMonth/>}
                                {value1 === "year" &&  <OftadehChartYear/>}


        
                                <Grid container spacing={3}>
           		<Grid item sm={12}>
          		<Paper className={classes.paper}>
              <h5>Gráfico  de Barra</h5>
              {value1 === "today" &&  <OftadehBarChart1/>}
              {value1 === "week" &&  <OftadehBarChartWeek/>}
              {value1 === "month" &&  <OftadehBarChartMonth/>}
              {value1 === "year" &&  <OftadehBarChartYear/>}
                                         
          		</Paper>


                
          	
		    </Grid>      
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <h5>Gráfico  Linear</h5>
        {value1 === "today" &&  <OftadehBarChart2/>}
                                {value1 === "week" &&  <OftadehChartWeek2/>}
                                {value1 === "month" &&  <OftadehChartMonth2/>}
                                {value1 === "year" &&  <OftadehChartYear2/>}


        
                                <Grid container spacing={3}>
           		<Grid item sm={12}>
          		<Paper className={classes.paper}>
              <h5>Gráfico  de Barra</h5>
              {value1 === "today" &&  <OftadehBarChart3/>}
              {value1 === "week" &&  <OftadehBarChartWeek2/>}
              {value1 === "month" &&  <OftadehBarChartMonth2/>}
              {value1 === "year" &&  <OftadehBarChartYear2/>}
                                         
          		</Paper>


                
          	
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