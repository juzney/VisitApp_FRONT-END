import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListHeader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ExitToApp from '@material-ui/icons/ExitToApp';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Visibility from '@material-ui/icons/Visibility';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SettingsInputAntennaSharpIcon from '@material-ui/icons/SettingsInputAntennaSharp';


export const mainListItems = (
  <div>
    <ListItem button component="a" href="#">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Painel Admin" />
    </ListItem>

 

    <ListItem button component="a" href="/admin/visitas/marcadas">
      <ListItemIcon>
      <SettingsInputAntennaSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Gerir Visitas" />
    </ListItem>


    <ListItem button  component="a" href="/admin/usuarios">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Gerir Usuarios" />
    </ListItem>

   
  </div>
);


export const secondaryListItems = (
  <div>
    <ListHeader inset>HISTORICO </ListHeader>

    <ListItem button  component="a" href="/admin/visitas">
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Todas Visitas" />
    </ListItem>
    <ListItem button  component="a" href="/admin/visitas/adiadas">
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Visitas Adiadas" />
    </ListItem>
    <ListItem button  component="a" href="/admin/visitas/canceladas">
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Visitas Canceladas" />
    </ListItem>
 
  </div>
);
 

export const secondaryListItems2 = (
  <div>
  
    <ListItem button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);