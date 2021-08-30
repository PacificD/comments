import React, { Component } from 'react'
import CommentBox from './CommentBox'

export default class ReplyBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showCommentBox: false
        }
    }

    handleChick() {
        //隐藏文本域
        let isShow = this.state.showCommentBox;
        this.setState({
            showCommentBox: !isShow
        });
    }

    //传递给子组件，用于更改showCommentBox
    changeShow(bool) {
        this.setState({
            showCommentBox: bool
        })
    }


    render() {
        return (
            <div>
                <button className="pt-4 pb-10 text-blue-600 outline-none" onClick={this.handleChick.bind(this)}>回复</button>
                <CommentBox commentIndex={this.props.commentIndex}
                    changeShow={this.changeShow.bind(this)} isShow={this.state.showCommentBox} reply="true" />
            </div>
        )
    }
}
