import React, { Component } from 'react'
import FeedComponent from './FeedComponent'
import PostQuestionComponent from './PostQuestionComponent'
export default class Feed extends Component {
    render() {
        return (
            <div>
                 <PostQuestionComponent/>               
            </div>
        )
    }
}
