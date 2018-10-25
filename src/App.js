import React, { Component } from 'react';
import './App.css';
import {AppBar, Toolbar, Typography, Grid, GridList, GridListTile, Button} from '@material-ui/core';
import Dropzone from 'react-dropzone'
import { Doughnut } from 'react-chartjs-2';
import Iframe from 'react-iframe';

class App extends Component {

  constructor() {
    super()
    this.state = { 
      show: false,
      files: [] , text: 'Here you can drag the medical images you want to upload',
    dataP: [
      {
        id: 1,
        cols: 1,
        data: {
          labels: ['High', 'Moderate', 'Low'],
          datasets: [{
            backgroundColor: ['red', 'yellow', 'green'],

            data: [
              3,
              7,
              1
            ]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Fiber correlation with population'
          }
        }
      },
      {
        id: 2,
        cols: 1,
        data: {
          labels: ['High', 'Moderate', 'Low'],
          datasets: [{
            backgroundColor: ['red', 'yellow', 'green'],

            data: [
              2,
              7,
              2
            ]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Fiber change over time'
          }
        }
      }
    ]};

    
  }

  onDrop(acceptedFiles, rejectedFiles) {

    const names = acceptedFiles.map(item => item.name);

    this.setState({
      files: acceptedFiles,
      text: names.join('\n')
    });
  }

  render() {
    return (
      <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Braviz
          </Typography>
        </Toolbar>
      </AppBar>
<Grid container alignContent="center">
<Grid item xs={6} direction="column">
<h1>Upload images</h1>
     {/* <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>{this.state.text}</p>
    </Dropzone> */}
          <Iframe url="http://slicedrop.com/"
        width="600px"
        height="400px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        />
        <Button onClick={()=>{this.setState({show: true})}} color="primary" variant="outlined">
Analyse
        </Button>
          </Grid>
          <Grid item xs={6} direction="column">
          <h1>Stats</h1>
          {this.state.show &&
          <GridList cellHeight={300} cols={1} >
        {this.state.dataP.map(item => (
          <GridListTile key={item.id} cols={item.cols || 1}>
            <Doughnut data={item.data} height={100} options={item.options} />
          </GridListTile>
        ))}
      </GridList>
          }
          </Grid>
          </Grid>

          <div style={{height: 200}}> </div>
          
      </div>
    );
  }
}

export default App;
