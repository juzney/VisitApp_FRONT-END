import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard'
import Sensores from './pages/admin/sensores'
import CadastroSensores from './pages/admin/sensores/sensorCadastro'
import EditarSensores from './pages/admin/sensores/sensorEditar'


import Usuarios from './pages/admin/usuarios'
import ChartData from './pages/admin/realTime/ChartData'
import RealTime from './pages/admin/realTime/realTime'
import TableList from './pages/admin/realTime/TableList'
import CadastroUsuarios from './pages/admin/usuarios/usuarioCadastrar';
import EditarUsuarios from './pages/admin/usuarios/usuarioEditar';
import VisitasMarcada from './pages/admin/sensores/marcadas';
import VisitasAdiadas from './pages/admin/sensores/adiadas';
import VisitasCanceladas from './pages/admin/sensores/canceladas';
import VisitasTodas from './pages/admin/sensores/allVisits';
import Login from './pages/admin/login';
import app2 from './pages/admin/usuarios/App2';

// IMPORTS CLIENTE

import Home from './pages/cliente/home'
import SensorDetails from './pages/cliente/sensores/sensoresDetails'


export default function Routes(){

	return(
			<BrowserRouter>
				<Switch>
					// ROTAS CLIENTE
					<Route path="/" exact component={Login}/>
					<Route path="/home" exact component={Home}/>
			

					// ROTAS ADMIN
					<Route path="/admin/app" exact component={app2}/>
					<Route path="/admin" exact component={Dashboard}/>
					<Route path="/admin/login" exact component={Login}/>
					<Route path="/admin/visitas" exact component={Sensores}/>
					<Route path="/admin/visitas/cadastrar" exact component={CadastroSensores}/>
					<Route path="/admin/visitas/editar/:idSensor" exact component={EditarSensores}/>

					<Route path="/admin/usuarios" exact component={Usuarios}/>
					<Route path="/admin/usuarios/editar/:idUsuario" exact component={EditarUsuarios}/>
					<Route path="/admin/usuarios/cadastrar" exact component={CadastroUsuarios}/>
			

					<Route path="/admin/visitas/adiadas" exact component={VisitasAdiadas}/>
					<Route path="/admin/visitas/canceladas" exact component={VisitasCanceladas}/>
					<Route path="/admin/visitas/marcadas" exact component={VisitasMarcada}/>
					<Route path="/admin/visitas" exact component={VisitasTodas}/>
					
				</Switch>

			</BrowserRouter>

		)
}