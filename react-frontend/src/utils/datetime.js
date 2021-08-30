/*
 * @Author: PacificD
 * @Date: 2021-08-29 16:46:47
 * @LastEditors: PacificD
 * @LastEditTime: 2021-08-29 16:47:55
 * @Description: 将Date对象调整为SQL datetime格式可识别的字符串
 */

export default function datetime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let Hours = date.getHours();
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    let s_createtime = year + '-' + month + '-' + day + ' ' + Hours + ':' + Minutes + ':' + Seconds;

    return s_createtime;
}
