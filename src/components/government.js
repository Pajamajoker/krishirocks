import React, {Component} from 'react'
import Chart from './Chart'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import Navbar from './Navbar'

import govtschemes from './govtschemes';


class government extends Component{
    constructor(){
        super();
        this.state={
            chartData:{}
        }
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }



   async componentDidMount(){
       
        await this.getChartData();
        console.log(JSON.stringify(this.state));
        // console.log('here')

    }

getChartData(){
    axios.get('http://localhost:8080/govt/show/cropdata',{params:{aadharid:'123456789012'}})
    .then(response => {
        // this.data=response.data;
        console.log(JSON.stringify(response.data[0].name))
        this.setState({
            chartData:{
                labels: [ response.data[0].name, response.data[1].name,response.data[2].name,response.data[3].name,
                response.data[4].name,response.data[5].name],
            datasets:[
                {
                    label:'Area in acres',
                    data:[
                        response.data[0].area,
                        response.data[1].area,
                        response.data[2].area,
                        response.data[3].area,
                        response.data[4].area,
                        response.data[5].area
                    ],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(75,192,192,0.6)',
                        'rgba(152,102,255,0.6)',
                        'rgba(255,159,64,0.6)'
                    ]
                }
            ]
            }
        })    
    });
    console.log(JSON.stringify(this.data));

// this.setState({
//         chartData:{
//             labels: ['Boston', 'Worcester','Springfield','Lowell',
//         'Cambridge','New Bedford'],
//         datasets:[
//             {
//                 label:'Population',
//                 data:[
//                     617545,
//                     123456,
//                     234567,
//                     12345,
//                     789054,
//                     245678
//                 ],
//                 backgroundColor:[
//                     'rgba(255,99,132,0.6)',
//                     'rgba(54,162,235,0.6)',
//                     'rgba(255,206,86,0.6)',
//                     'rgba(75,192,192,0.6)',
//                     'rgba(152,102,255,0.6)',
//                     'rgba(255,159,64,0.6)'
//                 ]
//             }
//         ]
//         }
//     })
}

    render(){
        return(
            
    <React.Fragment> 
      <Navbar/>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Uploads</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" >schemes<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Broadcast</a>
        </li>
    </ul>
    <ul class="navbar-nav ml-auto">
        <li class="dropdown">
            <a class="dropdown-toggle" href="#" role="button">Manage<span class="caret"></span></a>
        </li>
       <ul class="dropdown-menu">
           <li><a href="#">Save Data</a></li>
           <li><a href="#">Fetch Data</a></li>

       </ul>
    </ul>
    </div>
  </nav>     */}
        <Switch>
                    
                    <Route  path="/govtschemes" component={govtschemes}></Route>

                </Switch>          
     {/* <form onSubmit={this.handleSubmit}>
         <br></br>
        <label>
          Message:
          <input type="text" value={this.state.value} style={{border:"blue"}}  onChange={this.handleChange} />
        </label>
        <label>
          State:
          <input type="text" value={this.state.value} style={{border:"blue"}}  onChange={this.handleChange} />
        </label>
        <label>
          District:
          <input type="text" value={this.state.value} style={{border:"blue"}}  onChange={this.handleChange} />
        </label>
        <label>
          Title:
          <input type="text" value={this.state.value} style={{border:"blue"}}  onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}

        
      
           <div className="row">
        <div className="col-md-5">
            {Object.keys(this.state.chartData).length &&
              <Chart
                chartData={this.state.chartData}
                legendPosition="bottom"
                text="Crop Area"
              />
             }
             </div>
          </div>
          </React.Fragment>
         
          
        
      
            
            );
    }
}
export default government;