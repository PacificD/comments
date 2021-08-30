package com.Pacific_D.comments.service;

import com.Pacific_D.comments.mapper.CommentMapper;
import com.Pacific_D.comments.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentMapper commentMapper;

    public List<Comment> comments(){
        return commentMapper.comments();
    }

    public int addComment(Comment comment){
        return commentMapper.addComment(comment);
    }
}
