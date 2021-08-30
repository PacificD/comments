/*
 * @Author: PacificD
 * @Date: 2021-08-29 15:56:01
 * @LastEditors: PacificD
 * @LastEditTime: 2021-08-30 22:27:05
 * @Description:
 */
import axios from "axios";

const COMMMENT_API_DEV_BASE_URL = "http://localhost:8082/api/comments";

class CommentService {
    getComments() {
        return axios.get(COMMMENT_API_DEV_BASE_URL);
    }

    addComment(comment) {
        return axios.post(COMMMENT_API_DEV_BASE_URL, comment);
    }
}

export default new CommentService()
