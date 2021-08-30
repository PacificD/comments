import React, { Component } from 'react'
import PubSub from "pubsub-js"

export default class CommentBox extends Component {
    /**
     * props: {
     *  reply<Boolen> //是否为子集回复
     * }
     */

    constructor(props) {
        super(props)

        this.state = {
            textarea: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            textarea: e.target.value
        });
    }

    handleSumbit(e) {
        // 调用父组件传来的方法，传递textarea的值给父组件

        //阻止默认事件
        e.preventDefault();

        //评论不能为空
        if (this.state.textarea === "") {
            alert("不能为空！");
            return
        }

        //返回给CommentApp文本域的值
        if (this.props.getTextarea) {
            this.props.getTextarea(this.state.textarea);
        } else {
            //发布当前回复评论的内容与下标
            PubSub.publish('textarea', {
                textarea: this.state.textarea,
                index: this.props.commentIndex
            });
        }

        //清空文本域
        this.setState({
            textarea: ""
        })

        //隐藏文本域
        if (this.props.reply === "true") {
            this.props.changeShow(false);
        }

    }

    cancel(e) {
        e.preventDefault();

        this.setState({
            textarea: ""
        });

        if (this.props.reply === "true") {
            this.props.changeShow(false);
        }
    }


    render() {
        let isShow = "grid";
        if (this.props.isShow === false) {
            isShow = "none";
        }
        return (
            <form className="grid" style={{ display: isShow }}>
                <textarea name="comment" value={this.state.textarea} onChange={this.handleChange} placeholder="请输入你的评论" className="bg-gray-50 p-2 rounded"></textarea>
                <fieldset className="py-4">
                    <input type="submit" onClick={this.handleSumbit.bind(this)} value="评论" className="px-4 py-1 bg-blue-600 rounded border text-white cursor-pointer" />
                    <input type="reset" onClick={this.cancel.bind(this)} value="取消" className="px-4 py-1 bg-white rounded border ml-3 cursor-pointer" />
                </fieldset>
            </form>
        )
    }
}
