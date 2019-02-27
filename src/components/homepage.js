import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Home extends Component {
  render() {
    return (
      <div className="background-color">
      <div style = {{width: '100%', margin: 'auto'}}>
      <h1 className="heading-style">Top Summer Places to Visit</h1>
        <Grid className="demo-grid-ruler">
          <Cell col= {4}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfM1S52-kY5dyZ8trJe-KL33HpPGAykPeQhnr1DQVskrC4PM_-2A"
              alt="MaldivesVisit"
              className="style-img"
            />
            <div className="maldives-text">
              <p>Maldives</p>
            </div>
          </Cell>
          <Cell col= {4}>
            <img
              src="https://www.studyabroad.com/sites/default/files/images/New-Zealand-Summer-Study-Abroad-Programs.jpg"
              alt="NewZealandVisit"
              className="style-img"
            />
            <div className="nz-text">
              <p>New Zealand</p>
            </div>
          </Cell>
          <Cell col= {4}>
            <img
              src="http://www.visitgreece.gr/deployedFiles/StaticFiles/Photos/Generic%20Contents/Nisia/Skiathos_s82653052_560.jpg"
              alt="GreeceVisit"
              className="style-img"
            />
            <div className="greece-text">
              <p>Greece</p>
            </div>
          </Cell>
        </Grid>
        <Grid className="demo-grid-ruler">
          <Cell col= {4}>
            <img
              src="https://interrail.imgix.net/2xy2pqnc4s5i/4cRG3dNHYky8EC2Q4QACW6/a1dcd3757445cb973c746b1d99fd856f/thailand-islands.jpg?w=1000&h=666&q=50&fit=crop&auto=compress&s=2616c074a8dcdc0ad937b39a47570e11.jpg"
              alt="ThailandVisit"
              className="style-img"
            />
            <div className="thailand-text">
              <p>Thailand</p>
            </div>
          </Cell>
          <Cell col= {4}>
            <img
              src="https://www.tripsavvy.com/thmb/cBY_zZ8InoTyJhvk-LmbrfatzGQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/173281354-56a4c1f45f9b58b7d0d8c3af.jpg"
              alt="FranceVisit"
              className="style-img"
            />
            <div className="france-text">
              <p>France</p>
            </div>
          </Cell>
          <Cell col= {4}>
            <img
              src="https://bhagyashritravels.com/wp-content/uploads/2017/12/Mauritius-1.jpg"
              alt="MauritiusVisit"
              className="style-img"
            />
            <div className="mauritius-text">
              <p>Mauritius</p>
            </div>
          </Cell>
        </Grid>
        </div>
      </div>
    )
  }
}

export default Home;
