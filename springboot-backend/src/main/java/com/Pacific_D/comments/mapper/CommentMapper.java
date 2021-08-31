package com.Pacific_D.comments.mapper;

import com.Pacific_D.comments.model.Comment;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CommentMapper {

    //获取所有评论
    @Select("SELECT * FROM comments")
    List<Comment> comments();

    //获取评论最大ID
    @Select("SELECT cid FROM cid WHERE queryID = 1")
    int getCommentLength();

    //更新评论最大ID
    @Update("UPDATE cid SET cid=cid+1 WHERE queryID = 1")
    int updateCommentLength();

    //新增评论
    @Insert("INSERT INTO comments(user,avatar,time,content,parent)" +
            "VALUES(#{user},#{avatar},#{time},#{content},#{parent})")
    int addComment(Comment comment);

    //删除评论
    @Delete("DELETE FROM comments WHERE id=#{id}")
    int deleteComment(int id);
}
