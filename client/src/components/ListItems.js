import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

const changeDisplayCard = ({onSelectColumn}, count)=>{ onSelectColumn(count);}

const MainListItems = (props)=>{
    return(
      <Fragment>
      <div>
         <ListItem button onClick={()=>{ changeDisplayCard(props, 1);}}>
           <ListItemIcon>
             <DashboardIcon />
           </ListItemIcon>
           <ListItemText primary="Take Attendance" />
         </ListItem>
        <ListItem button onClick={()=>{ changeDisplayCard(props, 2);}}>
         <ListItemIcon>
           <ShoppingCartIcon />
         </ListItemIcon>
         <ListItemText primary="Add New Students" />
        </ListItem>
        <ListItem button onClick={()=>{ changeDisplayCard(props, 3);}}>
         <ListItemIcon>
           <PeopleIcon />
         </ListItemIcon>
         <ListItemText primary="Check Attendance" />
        </ListItem>
      </div>
      </Fragment>
    )
}

export default MainListItems;
