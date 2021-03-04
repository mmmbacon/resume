import { 
  Container, 
  Box, 
  Button, 
  Typography, 
  Grid,
  AppBar,
  Toolbar, 
  IconButton,
  Hidden,
  Icon
 } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { loadCSS } from 'fg-loadcss';

import { withStyles,ThemeProvider  } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

//Colors
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';



const theme = createMuiTheme({
  spacing: 3,
  typography: {
    root: blue,
    button: {
      fontSize: '1rem',
    },
  },
  palette: {
    primary: red,
    textPrimary: '#282c34'
  },
});

const styles = theme => ({
  root: {
    marginTop: theme.spacing,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    background: '#282c34', 
    boxShadow: 'none'
  }
})

function useFontAwesome(){
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);
}

function FontAwesome(){
  useFontAwesome();
  return null;
}

class App extends React.Component {

  constructor(props){
    super(props);
  };

  render(){
    const {classes} = this.props;

    return (
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <div className="App">
            <Container>
              <Grid container direction="row" justify="center">
                <Grid item>

                  <Hidden smUp>
                    <Box my={6} p={6}>
                      <Typography variant="h4" color="primary">[ B R A N D ]</Typography>
                    </Box>
                  </Hidden>

                  <Hidden xsDown>
                    <Box my={6} p={6}>
                      <Typography variant="h2" color="primary">[ D E S I G N ]</Typography>
                    </Box>
                  </Hidden>

                </Grid>
              </Grid>
            </Container>
            <AppBar position="sticky" className={classes.appBar}>
              <Toolbar variant="dense">
                <Container>
                  <IconButton  edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                    <MenuIcon style={{ width: '75px', height: '75px'}}/>
                  </IconButton>
                </Container>
              </Toolbar>
            </AppBar>
            <Container>
              <Grid container direction="column" justify="center">
                <Grid item container direction="row" justify="flex-start">
                  <Grid item>
                    <Box my={3}>
                      <Typography variant="h4" color="primary">[ W E B ]</Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box my={3}>
                      <Typography color="primary" align="left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </Typography>
                      <FontAwesome></FontAwesome>
                      <ul>
                        <li><Icon className="fab fa-node-js" color="primary"/></li>
                        <li><Icon className="fab fa-react" color="primary"/></li>
                        <li><Icon className="fab fa-bootstrap" color="primary"/></li>
                        <li><Icon className="fab fa-git" color="primary"/></li>
                        <li><Icon className="fas fa-bed" color="primary"/></li>
                      </ul>
                      
                      
                      
                      
                    </Box>
                  </Grid>
                </Grid>
                <Grid item container direction="row" justify="flex-end">
                  <Grid item>
                    <Box my={3}>
                      <Typography variant="h4" color="primary">[ C A D ]</Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box my={3}>
                      <Typography color="primary" align="left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item container direction="row" justify="flex-start">
                  <Grid item>
                    <Box my={3}>
                      <Typography variant="h4" color="primary">[ 3 D M O D E L ]</Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box my={3}>
                      <Typography color="primary" align="left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item container direction="row" justify="flex-end">
                  <Grid item>
                    <Box my={3}>
                      <Typography variant="h4" color="primary">[ C I R C U I T ]</Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box my={3}>
                      <Typography color="primary" align="left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item container direction="row" justify="flex-start">
                <Grid item>
                    <Box my={3}>
                      <Typography variant="h4" color="primary">[ G A M E ]</Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box my={3}>
                      <Typography color="primary" align="left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        </ThemeProvider>
      </header>
    );
  }
  
}

export default withStyles(styles)(App);