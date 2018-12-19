import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
          );
      }
}

CheckAttendance.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect((state)=>state, actions)(withStyles(styles)(CheckAttendance));
