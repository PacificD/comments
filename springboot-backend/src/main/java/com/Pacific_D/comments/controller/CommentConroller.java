/*
 * @Author: PacificD
 * @Date: 2021-08-29 15:41:04
 * @LastEditors: PacificD
 * @LastEditTime: 2021-08-30 22:27:44
 * @Description: 
 */
package com.Pacific_D.comments.controller;

import com.Pacific_D.comments.model.Comment;
import com.Pacific_D.comments.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"}) //解决前端跨域访问的问题
@RestController
@RequestMapping("/api")
public class CommentConroller {

    @Autowired
    private CommentService commentService;

    @GetMapping("/comments")
    public List<Comment> getAllComments(){
        return commentService.comments();
    }

    @GetMapping("/comments/length")
    public int getCommentLength(){
        return commentService.getCommentLength();
    }

    @GetMapping("/comments/length/plus")
    public int updateCommentLength(){
        return commentService.UpdateCommentLength();
    }

    @PostMapping("/comments")
    public int addComment(@RequestBody Comment comment){
        return commentService.addComment(comment);
    }

    @DeleteMapping("/comments/{id}")
    public int deleteComments(@PathVariable int id){
        return commentService.deleteComment(id);
    }
}
