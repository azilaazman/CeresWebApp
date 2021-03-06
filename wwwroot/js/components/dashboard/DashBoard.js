<<<<<<< HEAD
var $ = require('jquery');
import React, { PropTypes } from 'react';
import { Link, IndexRoute, browserHistory, hashHistory, IndexRedirect } from 'react-router';
import awsIot from 'aws-iot-device-sdk';
import BoxPanel from './BoxPanel/BoxPanel.js'



var DashBoard = React.createClass({
  loadPlantFromServer: function () {
    
    setInterval(function() {
      // console.log("hi");  
      
      $.post("http://cereswebapi.azurewebsites.net/api/v1/getUnitSettings/5846c5f5f36d282dbc87f8d4",function(){
      }).done(function(data){
        var plantData = data[0];
        // console.log(plantData);
        // console.log(plantData["temp"]);
        this.setState({
          temp:  plantData["temp"] + '°C',
          humid: plantData["humid"] + '%',
          water: plantData["water"],
          light: plantData["light"] + 'lm'    
        })


      }.bind(this));//end done
    }.bind(this),2000);


// var buffer = fs.readFileSync(filename);
    //  var contents = fs.readFileSync('./AWSCert/1f452c99e4-private.pem.key', 'utf8');
    // var keyPathFile = fs.readFileSync('./AWSCert/1f452c99e4-private.pem.key');
    // var certPathFile = fs.readFileSync('./AWSCert/1f452c99e4-certificate.pem.crt');
    // var caPathFile = fs.readFileSync('./AWSCert/root-CA.crt');
    
    //  console.log("loadSensorDataFromAWSIOT");
    //  
    // //  console.log(keyPathFile);
    //  var thingShadows = awsIot.thingShadow({
    //    keyPath: './AWSCert/1f452c99e4-private.pem.key', 
    //    certPath: './AWSCert/1f452c99e4-certificate.pem.crt', 
    //    caPath: './AWSCert/root-CA.crt', 
    //    clientId: 'raspberrypi', 
    //    region: 'a16h9u0dkdtqab.iot.ap-southeast-1.amazonaws.com'
    //  })
     
    //  var clientToken;
     
     //this function return a client token
    //  thingShadows.on('connect', function() {
    //  //every 5 seconds,get sensor data from aws iot with mqtt client topic (get)
    //    setTimeout(function() {
    //      clientToken = thingShadows.get('raspberrypi');
    //      
    //      console.log(clientToken);
    //    },5000);     
    //  })
     
     
=======
var React = require('react');
var PropTypes = React.PropTypes;
import { Link, IndexRoute, browserHistory, hashHistory, IndexRedirect } from 'react-router';
var DashBoard = React.createClass({
   loadPlantFromServer: function () {
    // if received
    // Uncaught SyntaxError: Unexpected token < in JSON at position 0
    // at JSON.parse (<anonymous>)
    // at ProxyComponent.eval (eval at compileModule (bundle.js:62), <anonymous>:41:23)  from bundle.js
    // it is because of XMLHTTRequest
        // var xhr = new XMLHttpRequest();
        // xhr.open('get', this.props.url, true);
        // xhr.onload = function () {
        //     var data = JSON.parse(xhr.responseText);
        //     var length = data.length;
        //     //console.log(data[length - 1]);
        //     var lastData = data[length - 1]; //the json data that we want
        //     this.setState({ name: lastData['name'] });
        //     var gc = lastData['growing_conditions'];
        //     this.setState({ temp: gc['temp'] });
        //     this.setState({ humid: gc['humid'] });
        //     this.setState({ light: gc['light'] });
        //     this.setState({ power: gc['power'] });
        // }.bind(this);
        // xhr.send();
>>>>>>> 781eb02bee0c66c0bab44ddca90dd48524d94c42
    },
   getInitialState: function(){
        return {
            name: '-',
<<<<<<< HEAD
            temp: '-°C',
            humid: '-%',
            water: '-',
            care: '',
            light: '-lm',
            power: '-W',
        }
    },
   componentDidMount: function(){
     console.log("component did mount..");
       this.loadPlantFromServer();
=======
            temp: '-',
            humid: '-',
            water: '-',
            care: '',
            light: '-',
            power: '-',
        }
    },
   componentDidMount: function(){
       //this.loadPlantFromServer();
>>>>>>> 781eb02bee0c66c0bab44ddca90dd48524d94c42
   },
   render: function() {
        return (
          <div id="page-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h1 data-step="1" data-intro="This is your home!" className="page-header">Dashboard</h1>
              </div>
                {/* /.col-lg-12 */}
            </div>
              {/* /.row */}
<<<<<<< HEAD
          <div className="row">
            <div className="row" data-step="2" data-intro="Find all your crucial data here!"> 
            
              <BoxPanel 
                className="panel panel-primary"
                link="/plants/tempDetails" 
                data={this.state.temp}
                title="Temperature"
              />
      
              <BoxPanel 
                className="panel panel-green"
                link="/plants/humidityDetails"
                data={this.state.humid}
                title="Humidity"
              />

              <BoxPanel 
                className="panel panel-yellow"
                link="/plants/electricityDetails"
                data={this.state.power}
                title="Electricity"
              />

              <BoxPanel 
                className="panel panel-red"
                link="/plants/lightDetails"
                data={this.state.light}
                title="Light Intensity"
              />
                
=======
        <div className="row">
          <div className="row" data-step="2" data-intro="Find all your crucial data here!"> 
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-thermometer-empty fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.temp}°C</div>
                    <div>Temperature</div>
                  </div>
                </div>
              </div>
              <Link to="/plants/tempDetails">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="panel panel-green">
              <div id="humidityDtls" className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-tint fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.humid}%</div>
                    <div>Humidity</div>
                  </div>
                </div>
              </div>
                <Link to="/plants/humidityDetails">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="panel panel-yellow">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-bolt fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.power}W</div>
                    <div>Electricity</div>
                  </div>
                </div>
              </div>
                <Link to="/plants/electricityDetails">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="panel panel-red">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-sun-o fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{this.state.light}lm</div>
                    <div>Light Intensity</div>
                  </div>
                </div>
              </div>
                <Link to="/plants/lightDetails">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                  <div className="clearfix" />
                </div>
              </Link>
            </div>
          </div>          
>>>>>>> 781eb02bee0c66c0bab44ddca90dd48524d94c42
          </div>

          <div className="col-md-6">
            <div className="panel panel-success">
              <div className="panel-heading">
                <i className="fa fa-info-circle fa-fw" /> Information Panel
              </div>
                {/* /.panel-heading */}
        <div className="panel-body">
          <h4>Your CERES Unit is growing <span className="text-success">{this.state.name}<i className="fa fa-pagelines" aria-hidden="true" /></span></h4>
          <div className="list-group">
               <a href="#" className="list-group-item">
                  <i className="fa fa-birthday-cake fa-fw"></i> 22 November 2016
                    <span className="pull-right text-muted small">
                        <em>just today</em>
                    </span>
               </a>
              <a href="#" className="list-group-item">
                    <i className="fa fa-hourglass-end fa-fw"></i> 22 December 2016
                    <span className="pull-right text-muted small">
                        <em>29 days to go</em>
                    </span>
              </a>
              <a href="#" className="list-group-item">
                    <i className="fa fa-video-camera fa-fw"></i> Spinach Cam
              </a>    
              <div className="camStyle">       
                <iframe src="http://www.w3schools.com" scrolling="no">
                  <p>To put live video content</p>
                </iframe>
              </div> 
          </div>
            {/* /.list-group */}
        <a href="#" className="btn btn-default btn-block">View All Info</a>
        </div>
                {/* /.panel-body */}
            </div>
              {/*/.panel*/}
          </div>
            {/*/.col-md-6 */}
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              <i className="fa fa-bar-chart-o fa-fw" />Sunlight Intensity
            </div>
              {/* /.panel-heading */}
        <div className="panel-body">
          <div className="flot-chart">
            <div className="flot-chart-content" id="flot-line-chart-moving" style={{height: 400}} />
          </div>
        </div>
              {/* /.panel-body */}
          </div>
            {/* /.panel */}
        </div>
            {/* /.col-lg-12 */}
        </div>
              {/* /.row */}
          </div>
    );
}
});

module.exports = DashBoard;
