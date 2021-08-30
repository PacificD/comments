import React, { Component } from 'react'
import ReplyContainer from "./ReplyContainer"
import ReplyBox from "./ReplyBox"

export default class CommentItem extends Component {
    /**
     * props: {
     *  user,
     *  avatar,
     *  time,
     *  content,
     *  child,
     * replies<Array>
     * }
     */

    render() {
        return (
            <div>
                <div className="flex">
                    <img alt="" src={this.props.comment.avatar} className="w-12 h-12 mr-4 rounded-full"></img>
                    <div>
                        <p>{this.props.comment.user}</p>
                        <p className="text-gray-600 text-sm">{this.props.comment.time}</p>
                    </div>

                    {/* 菜单靠右对齐 */}
                    <span className="ml-auto">
                        <svg t="1630156551566" className="h-5 w-5 text-gray-500 cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2208" width="200" height="200"><path d="M541.997208 117.157508m-100.711276 0a100.024 100.024 0 1 0 201.422552 0 100.024 100.024 0 1 0-201.422552 0Z" p-id="2209"></path><path d="M541.994187 519.998584m-100.711276 0a100.024 100.024 0 1 0 201.422552 0 100.024 100.024 0 1 0-201.422552 0Z" p-id="2210"></path><path d="M642.705463 922.840667c0 55.624594-45.089702 100.710269-100.711276 100.710269s-100.711276-45.085675-100.711276-100.710269c0-55.621574 45.089702-100.710269 100.711276-100.710269S642.705463 867.219093 642.705463 922.840667z" p-id="2211"></path></svg>
                    </span>
                </div>
                <p className="text-gray-600 py-4">{this.props.comment.content}</p>
                <div className="pl-8 border-l-2 border-gray-200">
                </div>

                <ReplyContainer replies={this.props.comment.replies ? this.props.comment.replies : null} />
                {!this.props.comment.child ? <ReplyBox commentIndex={this.props.commentIndex} /> : null}

            </div>
        )
    }
}
