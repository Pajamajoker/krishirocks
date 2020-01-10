import React, {Component} from 'react'
// import Chart from './Chart'
import axios from 'axios'

class vendorshowmsp extends Component{
    constructor(props){
        super(props);
        this.state={
            students: [
                { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
                { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
                { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
                { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
             ]
        }
   
    }
    componentDidMount(){
       
        console.log(JSON.stringify(this.state));
        // console.log('here')
    
    
        }
        renderTableHeader() {
            let header = Object.keys(this.state.students[0])
            return header.map((key, index) => {
               return <th style={{paddingTop:"12px",paddingBottom:"12px",textAlign:"center",backgroundColor:"#4CAF50",color:"white"}} key={index}>{key.toUpperCase()}</th>
            })
         }
        renderTableData() {
            return this.state.students.map((student, index) => {
               const { id, name, age, email } = student //destructuring
               return (
                   
                  <tr key={id} style={{border:"1px solid #ddd",padding:"8px"}}>
                     <td>{id}</td>
                     <td>{name}</td>
                     <td>{age}</td>
                     <td>{email}</td>
                  </tr>
               )
            })
         }
render(){
    return(
<div>
            <h1 id='title' style={{textAlign:"center",fontSize:"20px"}} >React Dynamic Table</h1>
            <table id='students'style={{textAlign:"center",fontFamily:"Arial,Helvetica,sans-serif,sans-serif",borderCollapse:"collapse",border:"3px solid #ddd",width:"100%"}}>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
    )
}
}
export default vendorshowmsp