import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import {connect} from 'react-redux'
import * as actions  from '../../actions'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
   padding: theme.spacing.unit * 2,
   textAlign: 'center',
   color: theme.palette.text.secondary,
 },
 textField: {
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit,
  width: 200,
},
searchFilter:{
  marginBottom: theme.spacing.unit
}
});

class CheckAttendance extends Component{
      constructor(){
          super();
      }
      componentDidMount(){
        this.props.listStudent(()=>{
           console.log("list students");
           console.log(this.props.students_list);
        });
      }
      render(){
          const { classes } = this.props;
          return (
             <Fragment>
                   <Card className={classes.searchFilter}>
                     <CardContent>
                     <Typography variant="h6" gutterBottom>
                        Check Attendance
                     </Typography>
                     <Grid container spacing={24}>
                       <Grid item xs>
                         <TextField
                            id="date"
                            label="From"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                       </Grid>
                       <Grid item xs>
                         <TextField
                            id="date"
                            label="To"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                       </Grid>
                       <Grid item xs>
                             <Button color="primary" variant="contained" onClick={this.addNewStudent} className={classes.submit}>Submit</Button>
                       </Grid>
                     </Grid>
                     </CardContent>
                   </Card>
               <Paper className={classes.root}>
                 <Table className={classes.table}>
                   <TableHead>
                     <TableRow>
                       <TableCell>Roll No</TableCell>
                       <TableCell align="right">Name</TableCell>
                       <TableCell align="right">Attendance</TableCell>
                     </TableRow>
                   </TableHead>
                   <TableBody>
                     {this.props.students_list.map(row => {
                       return (
                         <TableRow key={row._id}>
                           <TableCell component="th" scope="row">
                             {row.roll_no}
                           </TableCell>
                           <TableCell align="right">{row.name}</TableCell>
                           <TableCell align="right">{row.branch}</TableCell>
                         </TableRow>
                       );
                     })}
                   </TableBody>
                 </Table>
               </Paper>
             </Fragment>
          );
      }
}

CheckAttendance.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect((state)=>state, actions)(withStyles(styles)(CheckAttendance));
