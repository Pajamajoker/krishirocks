import React, { Component ,useState} from 'react'
import axios from 'axios'
import {Button,TextInputField, Pane,SelectMenu,Avatar} from 'evergreen-ui'
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
//import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import {Container} from 'reactstrap'
import './resources/vendor/bootstrap/css/bootstrap.min.css'
import './resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './resources/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import './resources/vendor/animate/animate.css'
import './resources/vendor/css-hamburgers/hamburgers.min.css'
import './resources/vendor/animsition/css/animsition.min.css'
import './resources/vendor/select2/select2.min.css'
import './resources/vendor/daterangepicker/daterangepicker.css'
import './resources/css/util.css'
import './resources/css/main.css'






export class FeedComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title : "",
            question : "",
            aadharid : "",
            tags : []
        }

        this.changeHandler = this.changeHandler.bind(this)

    }

    changeHandler = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    submitHandler = (event) =>{
        event.preventDefault()
        console.log(this.state)
        axios.post('http://192.168.43.233:8080/forum/post/question',this.state)
        .then(Response => {
            console.log(Response)
            window.alert("Entry successful!!!")
        })
        .catch(error =>{
            console.log(error);
        })


    }



    render() {
        const{title,question,aadharid} = this.state
        return (
            
            <div>
                <Avatar name="Jeroen Ransijn" size={40} />



{/* 

             <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.wallpaperscraft.com/image/mercedes_benz_mercedes_amg_front_view_silver_wood_100115_1920x1080.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src=".https://images.wallpaperscraft.com/image/mercedes_benz_mercedes_amg_front_view_silver_wood_100115_1920x1080.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.wallpaperscraft.com/image/mercedes_benz_mercedes_amg_front_view_silver_wood_100115_1920x1080.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>  */}


 

               <Container><center> 
               <Form.Group onSubmit = {this.submitHandler} >
                    <center>

                        <div className = 'container-fluid'>
                            <center>
                                <TextInputField
                                    required
                                    label = "title"
                                    type = "text"
                                    placeholder="TITLE"
                                    name = "title"
                                    value = {this.state.title}
                                    onChange = {this.changeHandler}
                                    width = "50%"
                                />
                            </center>
                        </div>
 
                        <div>
                            <center>
                                <TextInputField
                                    required
                                    label = "aadhar Id"
                                    type = "text"
                                    placeholder="aadhar Id"
                                    name = "aadharid"
                                    value = {this.state.aadharid}
                                    onChange = {this.changeHandler}
                                    width = "50%"
                                />
                            </center>
                        </div>  


                       <div>
                            <center>
                                <TextInputField
                                    required
                                    label = "Questions"
                                    type = "text"
                                    placeholder="Questions"
                                    name = "question"
                                    value = {question}
                                    onChange = {this.changeHandler}
                                    width = "50%"
                                />
                            </center>
                        </div> 

                    </center>
                    <center>
                        <Button marginRight={16}
                                appearance="primary"
                                type = "submit"
                                intent="success"
                                onClick = {this.submitHandler}
                                >SUBMIT
                        </Button>
                    </center>
            </Form.Group>
            </center>
            </Container>
            










            </div>
        )
    }
}

export default FeedComponent
