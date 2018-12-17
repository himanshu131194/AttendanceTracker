import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import * as actions  from '../../actions'

const styles = theme =>({
      fillInfoCard:{
        width: "50%",
        margin: "auto"
      },
      submit: {
        margin: 'auto',
        marginBottom: 20
      }
})

class AddStudent extends Component{
    constructor(){
       super();
       this.state = { name : '', email: '', phone: '', branch: ''}
    }
    addNewStudent = ()=>{
        this.props.addStudent(this.state, ()=>{
             console.log("dsdsdsdsdsdd");
        });
    }
    render(){
         const {classes} = this.props;
         return(
            <Fragment>
                <Card className={classes.fillInfoCard}>
                  <CardContent>
                  <Typography variant="h6" gutterBottom>
                     Add New Student
                  </Typography>
                  <Grid container spacing={24}>
                      <Grid item xs={12}>
                        <TextField required id="student_name" name="student_name" label="Name"
                        fullWidth autoComplete="student_name" onKeyUp={(e)=>this.setState({name: e.target.value})}/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField required id="email" name="email" label="Email"
                          fullWidth autoComplete="email" onKeyUp={(e)=>this.setState({email: e.target.value})}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField required id="phone" name="phone" label="phone"
                          fullWidth autoComplete="phone" onKeyUp={(e)=>this.setState({phone: e.target.value})}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField required id="email" name="email" label="Branch"
                          fullWidth autoComplete="email" onKeyUp={(e)=>this.setState({branch: e.target.value})}
                        />
                      </Grid>
                  </Grid>
                  </CardContent>
                  <CardActions className={classes.nextDetail}>
                     <Button color="primary" variant="contained" onClick={this.addNewStudent} className={classes.submit}>Submit</Button>
                  </CardActions>
                </Card>
            </Fragment>
         )
    }
}

AddStudent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, actions)(withStyles(styles)(AddStudent));
