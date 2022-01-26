import React, {useState} from 'react';
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

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('');
  const [senha, setSenha] = useState('');
  const [sexo, setSexo] = useState('');
  const [apelido, setApelido] = useState('');
  const [bi, setBI] = useState('');


  async function handleSubmit(){

  	const data = {
  		nome: nome,
  		emailUsuario: email,
  		tipoUsuario: tipo,
  		senha: senha,
		sexo: sexo,
		apelido: apelido,
		numeroBI: bi
  	}
	  console.log(data)
  	const response = await api.post('/register', data)

  	if(response.status===200){
  		window.location.href= "/";
  	}

  	else{
  		console.log('ola1')
  	}
  }



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

          			<h2>Cadastro de Usuarios</h2>
	          		 <Grid container spacing={3}>
			          		<Grid item xs={12} sm={6}>
					          <TextField
					            required
					            id="nome"
					            name="nome"
					            label="Nome"
					            fullWidth
					            autoComplete="nome"
					            value={nome}
					            onChange={e=> setNome(e.target.value)}
					          />
					        </Grid>
							<Grid item xs={12} sm={6}>
					          <TextField
					            required
					            id="apelido"
					            name="apelido"
					            label="Apelido"
					            fullWidth
					            autoComplete="apelido"
					            value={apelido}
					            onChange={e=> setApelido(e.target.value)}
					          />
					        </Grid>
							<Grid item xs={12} sm={4}>
					           <FormControl className={classes.formControl} fullWidth>
							        <InputLabel id="sexo">Sexo</InputLabel>
							        <Select
							          labelId="sexo"
							          id="sexo"
							         value={sexo}
							        
					            		onChange={e=> setSexo(e.target.value)}
							        >
							          <MenuItem value={1}>Masculino</MenuItem>
							          <MenuItem value={2}>Femenino</MenuItem>
									  
							        
							        </Select>
							    </FormControl>
					        </Grid>
							<Grid item xs={12} sm={4}>
					           <FormControl className={classes.formControl} fullWidth>
							        <InputLabel id="labelTipo">Tipo</InputLabel>
							        <Select
							          labelId="labelTipo"
							          id="tipo"
							         value={tipo}
							        
					            		onChange={e=> setTipo(e.target.value)}
							        >
							          <MenuItem value={1}>Administrador</MenuItem>
							          <MenuItem value={2}>Funcionario</MenuItem>
							        
							        </Select>
							    </FormControl>
					        </Grid>
							<Grid item xs={12} sm={4}>
					          <TextField
					            required
					            id="bi"
					            name="bi"
					            label="BI"
					            fullWidth
					            autoComplete="bi"
					              value={bi}
					            onChange={e=> setBI(e.target.value)}
					          />
					        </Grid>
					        <Grid item xs={12} sm={7}>
					          <TextField
					            required
					            id="email"
					            name="email"
					            label="Email"
					            fullWidth
					            autoComplete="email"
					              value={email}
					            onChange={e=> setEmail(e.target.value)}
					          />
					        </Grid>

					        <Grid item xs={12} sm={5}>
					          <TextField
					          	type="password"
					            required
					            id="senha"
					            name="senha"
					            label="Senha"
					            fullWidth
					            autoComplete="senha"
					              value={senha}
					            onChange={e=> setSenha(e.target.value)}
					          />

					        </Grid>

					         <Grid item xs={12} sm={3}>
					          	 <Button variant="contained" color="primary" onClick={handleSubmit}>
      								  Cadastrar
    							  </Button>
					        </Grid>
			        </Grid>
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