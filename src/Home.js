import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  buttons: {
    marginTop: theme.spacing(4),
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.content}>
          <Container maxWidth='sm'>
            <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
              Simple react forms
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Simple react sign in & sign up forms using material ui, formik and yup
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary' component={RouterLink} to='/signin'>
                    Sign In
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary' component={RouterLink} to='/signup'>
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}