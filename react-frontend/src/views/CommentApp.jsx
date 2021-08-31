import React, { Component } from 'react'
import CommentBox from "../components/CommentBox"
import CommentItem from '../components/CommentItem'
import DividerHorizontal from "../components/DividerHorizontal"
import CommentService from '../services/CommentService'
import datetime from '../utils/datetime'
import alert from "../utils/alert"
import PubSub from "pubsub-js"
import { Alert, message } from 'antd';
import "../assets/css/alert.css"

export default class CommentApp extends Component {
    constructor(props) {
        super(props)

        //管理评论id的变量
        this.cid = 1

        this.state = {
            //所有评论
            comments: [],
            // 提示信息
            alert: {
                message: "发送失败！",
                type: "error",
            },
            //提示信息是否可见
            visible: false
        }

        this.constructNewComment = this.constructNewComment.bind(this)
    }

    // 父组件传递一个方法给子组件，供子组件传递textarea的值给父组件 
    getTextarea(value) {
        const that = this;
        let comments = this.state.comments;
        comments.push(that.constructNewComment(value, false));
        this.setState({
            comments: comments
        });
    }

    handleClose() {
        this.setState({
            visible: false
        });
    }

    constructNewComment(text, bool, index) {
        let that = this;

        //获取随机头像
        let randomAvatar = "https://avatars.githubusercontent.com/u/" + Math.floor(Math.random() * 82834694) + "?v=4";

        //获取当前时间
        let date = datetime();

        //获取当前parent
        let comments = this.state.comments,
            parent = 0;
        for (let i = 0; i < comments.length; i++) {
            if (i === index) {
                parent = comments[i].id;
                break;
            } else {
                parent = 0;
            }
        }

        //发送网络请求
        CommentService.addComment({
            user: "匿名用户",
            avatar: randomAvatar,
            content: text,
            time: date,
            parent: parent
        }).then(res => {
            if (res[0].status === 200) {
                alert(this, "发送成功！", "success");
            } else {
                alert(this, "发送失败！", "error");
            }
        });

        // 提供新评论的工具函数
        return {
            id: that.cid++,
            user: "匿名用户",
            avatar: randomAvatar,
            content: text,
            time: date,
            child: bool,
            replies: []
        }
    }

    //供子组件-删除评论
    delete(id) {
        console.log("id: ", id);
        for (let i = 0; i < this.state.comments.length; i++) {
            if (this.state.comments[i].id === id) {
                let comments = this.state.comments;
                comments.splice(i, 1);
                this.setState({
                    comments: comments
                });
                message.success('删除成功！');
                break;
            } else {
                if (this.state.comments[i].replies.length > 0) {
                    //遍历子评论
                    for (let j = 0; j < this.state.comments[i].replies.length; j++) {
                        if (this.state.comments[i].replies[j].id === id) {
                            let comments = this.state.comments;
                            comments[i].replies.splice(j, 1);
                            this.setState({
                                comments: comments
                            });
                            message.success('删除成功！');
                            break;
                        }
                    }
                }
            }
        }
    }

    componentDidMount() {
        let that = this,
            comments = [],
            replies = [];

        //发送网络请求获取所有评论
        CommentService.getComments().then(res => {
            //获取最大ID
            CommentService.getCommentLength().then(res => {
                if (res.status === 200) {
                    that.cid = res.data;
                }
            });

            res.data.forEach(comment => {
                //如果该评论为第一级评论
                if (comment.parent === 0) {
                    comment.child = false;
                    comment.replies = [];
                    comments.push(comment);
                } else {
                    comment.child = true;
                    comment.replies = [];
                    replies.push(comment);
                }
            });

        }).then(
            () => {
                //处理回复
                replies.forEach(reply => {
                    for (let i = 0; i < comments.length; i++) {
                        if (reply.parent === comments[i].id) {
                            comments[i].replies.push(reply);
                        }
                    }
                })
            }
        ).then(
            () => {
                that.setState({
                    comments: comments
                })
            }
        );

        //组件挂载时订阅
        this.pubsub_token = PubSub.subscribe('textarea', (msg, data) => {
            //接收到回复的textarea(data)后的回调函数
            let comments = this.state.comments;
            comments[data.index].replies.push(that.constructNewComment(data.textarea, true, data.index));
            this.setState({
                comments: comments
            })
        });
    }

    componentWillUnmount() {
        //组件将要卸载时取消订阅
        PubSub.unsubscribe(this.pubsub_token);
    }

    render() {
        let comments;

        if (this.state.comments.length > 0) {
            comments = this.state.comments.map((item, index) => {
                return <CommentItem comment={item} key={index} commentIndex={index} delete={this.delete.bind(this)} />
            })
        }

        return (
            <main className="p-4 bg-gray-50 min-h-screen">
                <div className="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
                    <h2 className="text-3xl my-6">评论</h2>
                    {this.state.visible ?
                        <Alert message={this.state.alert.message} type={this.state.alert.type} closable afterClose={this.handleClose.bind(this)} showIcon />
                        : null}
                    <CommentBox reply="false" getTextarea={this.getTextarea.bind(this)} />
                    <DividerHorizontal />
                    {comments}

                </div>
            </main>
        )
    }
}
