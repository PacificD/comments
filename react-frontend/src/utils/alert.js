/*
 * @Author: PacificD
 * @Date: 2021-08-31 10:29:27
 * @LastEditors: PacificD
 * @LastEditTime: 2021-08-31 10:30:41
 * @Description:
 */
export default function alert(that, message, type) {
    that.setState({
        alert: {
            message: message,
            type: type,
        },
        visible: true
    });
    //一段时间后关闭提示
    setTimeout(() => {
        that.setState({
            visible: false
        })
    }, 1500);
}