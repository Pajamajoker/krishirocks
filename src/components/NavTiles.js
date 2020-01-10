import React, { Component } from 'react'
import './resources/vendor/bootstrap/css/bootstrap.min.css'
export default class NavTiles extends Component {
    render() {
        return (
            <div>

                <div className="container">
                <header className="jumbotron my-4">
                <h1 className="display-3">Krishi Rocks!</h1>
                
                <p className="lead">Find Help in Agriculture | Get Crop Recommendations</p>
                </header>

                
                <div className="row text-center">

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
