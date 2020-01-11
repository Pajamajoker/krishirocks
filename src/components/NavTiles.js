import React, { Component } from 'react'
import './resources/vendor/bootstrap/css/bootstrap.min.css'
import  {Carousel,Image} from 'react-bootstrap'




export default class NavTiles extends Component {
    render() {
        return (
            <div>






{/* 

                <header>                 
                <Carousel className = "container" View opacity = "0.5" width= "100%" >
                    <Carousel.Item width="50%" height="200px">
                        <Image
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/b/indian-farmer-holding-crop-plant-his-wheat-field-indian-farmer-holding-crop-plant-his-wheat-field-123557695.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        src="https://media.gettyimages.com/photos/workers-in-field-india-picture-id134178057?s=612x612"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1497448134719-754ac7fd09eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </header>



 */}































                <div className="container">
                <div className="jumbotron my-4">
                <h1 className="display-3" style={{backgroundImage:"https://www.gettyimages.in/detail/photo/cheerful-family-portrait-royalty-free-image/516326480"}}>Krishi Rocks!</h1>
                
                <p className="lead">Find Help in Agriculture | Get Crop Recommendations</p>
                </div>













                
                <div className="row text-center container">

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="https://storage.googleapis.com/cgiarorg/2019/08/072477a0-28ef-42cf-98e1-bf26389a5064-Photo-from-Daksin.jpg" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Crop Recommendations</h4>
                        <p className="card-text">Not sure which crops to plant?
                        Use our crop recommender  to find out maximum yeild of your crops
                        and get best crop recommendations for your farm 
                        personalized to your needs
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="/account" className="btn btn-primary">Get recommendations</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                    </div>
                    <div className="card-footer">
                        <a href="/account" className="btn btn-primary">Find Out More!</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                    <div className="card-footer">
                        <a href="/account" className="btn btn-primary">Find Out More!</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                    </div>
                    <div className="card-footer">
                        <a href="/account" className="btn btn-primary">Find Out More!</a>
                    </div>
                    </div>
                </div>

                </div>
                

                </div>
            </div>
        )
    }
}



















// https://thumbs.dreamstime.com/b/indian-farmer-holding-crop-plant-his-wheat-field-indian-farmer-holding-crop-plant-his-wheat-field-123557695.jpg
// https://media.gettyimages.com/photos/workers-in-field-india-picture-id134178057?s=612x612
// https://images.unsplash.com/photo-1497448134719-754ac7fd09eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60