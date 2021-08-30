/*
 * @Author: PacificD
 * @Date: 2021-08-28 20:47:39
 * @LastEditors: PacificD
 * @LastEditTime: 2021-08-28 20:47:39
 * @Description: 
 */

// craco.config.js
module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}
