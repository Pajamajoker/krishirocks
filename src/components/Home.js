import React, { Component } from 'react'
import BlogpostComponent from './BlogpostComponent'
import NavTiles from './NavTiles'
import {Carousel} from 'evergreen-ui'
export default class Home extends Component {
    render(props) {
        return (
            <div>
               <div>
                   <NavTiles/>
                    <BlogpostComponent/>
                </div>
            </div>
        )
    }
}
