import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import simular from '../../../components/simular';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import io from 'socket.io-client'
import StarIcon from '@material-ui/icons/StarBorder';
import { styled } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';





import PropTypes from 'prop-types';


import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './style.css'
import classNames from 'classnames'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));



const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};







function preventDefault(event) {
  event.preventDefault();
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  root: {
    display: 'flex',
  },
  appBar: {
 
      borderBottom: `1px solid ${theme.palette.divider}`
    
  },

  title: {
    flexGrow: 0,
  },
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
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
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(4, 0, 4),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'primary' ? theme.palette.grey[100] : theme.palette.grey[500],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[400],
    marginBottom: theme.spacing(2),
  },

  cardPricing1: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[800],
    marginBottom: theme.spacing(2),
  },

}));



export default function Dashboard() {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const classes = useStyles();

  const [humi, setHumi] = useState();
  const nivel = 'Normal';

  const nivel2 = 'Alta';


  useEffect(()=>  {


    const socket = io('http://localhost:3006',{transports: ['websocket', 'polling', 'flashsocket']})

    socket.on('humi', (humidity)=>{

      setHumi(humidity);
    });


  }, [])

 

  return (


    
    <div className={classes.root}>
      <CssBaseline />
   
      <MenuAdmin title={'Monitoramento'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
     
        <Container maxWidth="lg" className={classes.container}>
        
    <div className="container">
    
    <div className="row">
      
      
      <div className="card">
        <div className="card-header">
          <h2>Área Zn10</h2> 
     
            <div className="card-setor">
              <h4>Canteiro:A  Sector:10A</h4> 
            
            </div>
        </div>
        <div className="card-header2">
          <h3>Sensor de Temperatura</h3>
        </div>
        <div className="card-body">
        <div className="temp">
              20°c
        </div>
          <a href="#" className={classNames('btn', {'btn10':humi<=10}, {'btn20':humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20}, {'btn30':humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29}, {'btn40':humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40}, {'btn50':humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49}, {'btn60':humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60}, {'btn70':humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69}, {'btn80':humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79}, {'btn90':humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89}, {'btn100':humi>=90})}>{humi<10 ? 'Nivel: Critico':''}{humi==10||humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20||humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29 ? 'Nivel: Baixa':''}{humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49||humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60||humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69 ? 'Nivel: Aceitavel':''}{humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79||humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89||humi==90 ? 'Nivel: Alta':''}{humi>90 ? 'Nivel: Alerta':''}</a>
          <a href="#" className="btnv" onClick={handleClickOpen}> Detalhes</a>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Área Zn10</h2> 
     
            <div className="card-setor">
              <h4>Canteiro:A  Sector:10A</h4> 
            
            </div>
        </div>
        <div className="card-header2">
          <h3>Sensor de Temperatura</h3>
        </div>
        <div className="card-body">
        <div className="temp">
              20°c
        </div>
          <a href="#" className={classNames('btn', {'btn10':humi<=10}, {'btn20':humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20}, {'btn30':humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29}, {'btn40':humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40}, {'btn50':humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49}, {'btn60':humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60}, {'btn70':humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69}, {'btn80':humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79}, {'btn90':humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89}, {'btn100':humi>=90})}>{humi<10 ? 'Nivel: Critico':''}{humi==10||humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20||humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29 ? 'Nivel: Baixa':''}{humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49||humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60||humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69 ? 'Nivel: Aceitavel':''}{humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79||humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89||humi==90 ? 'Nivel: Alta':''}{humi>90 ? 'Nivel: Alerta':''}</a>
          <a href="#" className="btnv" onClick={handleClickOpen}> Detalhes</a>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Área Zn10</h2> 
     
            <div className="card-setor">
              <h4>Canteiro:A  Sector:10A</h4> 
            
            </div>
        </div>
        <div className="card-header2">
          <h3>Sensor de Temperatura</h3>
        </div>
        <div className="card-body">
        <div className="temp">
              20°c
        </div>
          <a href="#" className={classNames('btn', {'btn10':humi<=10}, {'btn20':humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20}, {'btn30':humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29}, {'btn40':humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40}, {'btn50':humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49}, {'btn60':humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60}, {'btn70':humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69}, {'btn80':humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79}, {'btn90':humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89}, {'btn100':humi>=90})}>{humi<10 ? 'Nivel: Critico':''}{humi==10||humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20||humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29 ? 'Nivel: Baixa':''}{humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49||humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60||humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69 ? 'Nivel: Aceitavel':''}{humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79||humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89||humi==90 ? 'Nivel: Alta':''}{humi>90 ? 'Nivel: Alerta':''}</a>
          <a href="#" className="btnv" onClick={handleClickOpen}> Detalhes</a>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Área Zn10</h2> 
     
            <div className="card-setor">
              <h4>Canteiro:A  Sector:10A</h4> 
            
            </div>
        </div>
        <div className="card-header2">
          <h3>Sensor de Temperatura</h3>
        </div>
        <div className="card-body">
        <div className="temp">
              20°c
        </div>
          <a href="#" className={classNames('btn', {'btn10':humi<=10}, {'btn20':humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20}, {'btn30':humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29}, {'btn40':humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40}, {'btn50':humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49}, {'btn60':humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60}, {'btn70':humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69}, {'btn80':humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79}, {'btn90':humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89}, {'btn100':humi>=90})}>{humi<10 ? 'Nivel: Critico':''}{humi==10||humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20||humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29 ? 'Nivel: Baixa':''}{humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49||humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60||humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69 ? 'Nivel: Aceitavel':''}{humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79||humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89||humi==90 ? 'Nivel: Alta':''}{humi>90 ? 'Nivel: Alerta':''}</a>
          <a href="#" className="btnv" onClick={handleClickOpen}> Detalhes</a>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Área Zn10</h2> 
     
            <div className="card-setor">
              <h4>Canteiro:A  Sector:10A</h4> 
            
            </div>
        </div>
        <div className="card-header2">
          <h3>Sensor de Temperatura</h3>
        </div>
        <div className="card-body">
        <div className="temp">
              20°c
        </div>
          <a href="#" className={classNames('btn', {'btn10':humi<=10}, {'btn20':humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20}, {'btn30':humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29}, {'btn40':humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40}, {'btn50':humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49}, {'btn60':humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60}, {'btn70':humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69}, {'btn80':humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79}, {'btn90':humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89}, {'btn100':humi>=90})}>{humi<10 ? 'Nivel: Critico':''}{humi==10||humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20||humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29 ? 'Nivel: Baixa':''}{humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49||humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60||humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69 ? 'Nivel: Aceitavel':''}{humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79||humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89||humi==90 ? 'Nivel: Alta':''}{humi>90 ? 'Nivel: Alerta':''}</a>
          <a href="#" className="btnv" onClick={handleClickOpen}> Detalhes</a>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Área Zn10</h2> 
     
            <div className="card-setor">
              <h4>Canteiro:A  Sector:10A</h4> 
            
            </div>
        </div>
        <div className="card-header2">
          <h3>Sensor de Temperatura</h3>
        </div>
        <div className="card-body">
        <div className="temp">
              20°c
        </div>
          <a href="#" className={classNames('btn', {'btn10':humi<=10}, {'btn20':humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20}, {'btn30':humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29}, {'btn40':humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40}, {'btn50':humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49}, {'btn60':humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60}, {'btn70':humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69}, {'btn80':humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79}, {'btn90':humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89}, {'btn100':humi>=90})}>{humi<10 ? 'Nivel: Critico':''}{humi==10||humi==11||humi==12||humi==13||humi==14||humi==15||humi==16||humi==17||humi==18||humi==19||humi==20||humi==21||humi==22||humi==23||humi==24||humi==25||humi==26||humi==27||humi==28||humi==29 ? 'Nivel: Baixa':''}{humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==30||humi==31||humi==32||humi==33||humi==34||humi==35||humi==36||humi==37||humi==38||humi==39||humi==40||humi==41||humi==42||humi==43||humi==44||humi==45||humi==46||humi==47||humi==48||humi==49||humi==50||humi==51||humi==52||humi==53||humi==54||humi==55||humi==56||humi==57||humi==58||humi==59||humi==60||humi==61||humi==62||humi==63||humi==64||humi==65||humi==66||humi==67||humi==68||humi==69 ? 'Nivel: Aceitavel':''}{humi==70||humi==71||humi==72||humi==73||humi==74||humi==75||humi==76||humi==77||humi==78||humi==79||humi==80||humi==81||humi==82||humi==83||humi==84||humi==85||humi==86||humi==87||humi==88||humi==89||humi==90 ? 'Nivel: Alta':''}{humi>90 ? 'Nivel: Alerta':''}</a>
          <a href="#" className="btnv" onClick={handleClickOpen}> Detalhes</a>
        </div>
      </div>
    </div>
  </div>
                  
      
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>


      <div>
     
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" >
        <h4> Área de Produção Zn10</h4>
        </BootstrapDialogTitle>
        <DialogContent dividers>
       
        <Typography gutterBottom>
          <h4> Localização:</h4>
          </Typography>
          <Typography gutterBottom>
             Canteiro: A
          </Typography>
          <Typography gutterBottom>
             Sector:  15
          </Typography>
       
          </DialogContent>
          <DialogContent dividers> 
          <Typography gutterBottom>
          <h4> Estado Actual do Campo:</h4>
          </Typography>
          <Typography gutterBottom>
              Nivel de Temperatura = 50
          </Typography>
          <Typography gutterBottom>
              Status:  Boa
          </Typography>
          </DialogContent>
          <DialogContent dividers>
          <Typography gutterBottom>
          <h4> Estado Actual da Bomda de Irrigação:</h4>
          </Typography>
          <Typography gutterBottom>
              Acionada e irrigando...
          </Typography>
       
          </DialogContent>
     
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            fechar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>


    </div>

    
  );
}

