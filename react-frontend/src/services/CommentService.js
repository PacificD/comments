/*
 * @Author: PacificD
 * @Date: 2021-08-29 15:56:01
 * @LastEditors: PacificD
 * @LastEditTime: 2021-08-31 23:16:43
 * @Description:
 */
import axios from "axios";

const COMMMENT_API_DEV_BASE_URL = "http://localhost:8082/api/comments";

class CommentService {
    getComments() {
        return axios.get(COMMMENT_API_DEV_BASE_URL);
    }

    addComment(comment) {
        return axios.all([
            axios.post(COMMMENT_API_DEV_BASE_URL, comment,),
            axios.get(COMMMENT_API_DEV_BASE_URL + "/length/plus")]);
    }

    deleteComment(id) {
        return axios.delete(COMMMENT_API_DEV_BASE_URL + '/' + id)
    }

    getCommentLength() {
        return axios.get(COMMMENT_API_DEV_BASE_URL + "/length");
    }
}

export default new CommentService()
