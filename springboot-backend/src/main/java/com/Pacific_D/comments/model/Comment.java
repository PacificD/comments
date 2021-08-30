package com.Pacific_D.comments.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class Comment {

    private int id;
    private String user;
    private String avatar;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private String time;

    private String content;
    private int parent;

    public Comment() {
    }

    public Comment(int id, String user, String avatar, String time, String content, int parent) {
        this.id = id;
        this.user = user;
        this.avatar = avatar;
        this.time = time;
        this.content = content;
        this.parent = parent;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getParent() {
        return parent;
    }

    public void setParent(int parent) {
        this.parent = parent;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", user='" + user + '\'' +
                ", avatar='" + avatar + '\'' +
                ", time='" + time + '\'' +
                ", content='" + content + '\'' +
                ", parent=" + parent +
                '}';
    }
}
