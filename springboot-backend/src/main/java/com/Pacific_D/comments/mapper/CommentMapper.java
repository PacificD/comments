package com.Pacific_D.comments.mapper;

import com.Pacific_D.comments.model.Comment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface CommentMapper {

    //获取所有评论
    @Select("SELECT * FROM comments")
    List<Comment> comments();

    //新增评论
    @Insert("INSERT INTO comments(user,avatar,time,content,parent)" +
            "VALUES(#{user},#{avatar},#{time},#{content},#{parent})")
    int addComment(Comment comment);
}
