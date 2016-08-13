/**
 * Created by kevin on 16/7/21.
 */
if(process.env.NODE_ENV === 'production'){
    module.exports = require('./webpack.config.prod')
}else{
    module.exports = require('./webpack.config.dev')
}