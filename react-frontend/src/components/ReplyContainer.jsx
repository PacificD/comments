import React, { Component } from 'react'
import CommentItem from './CommentItem';

export default class ReplyContainer extends Component {
    /**
    * props: {
    *  replies,
    * delete
    * }
    */

    render() {
        let comment;
        if (this.props.replies) {
            comment = this.props.replies.map((item, index) => {
                return <CommentItem delete={this.props.delete} key={index} comment={item} ></CommentItem>
            })
        }

        return (
            <div className="pl-8 border-l-2 border-gray-200">
                {/* 回复 */}
                <div>
                    {
                        comment
                    }
                </div>
            </div>
        )
    }
}
