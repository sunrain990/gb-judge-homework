/**
 * Created by kevin on 16/8/11.
 */
var http = require('http')

var url = 'http://121.41.4.51/api/open/submission/' +'?appkey=8461e6b9891fdb42b768c2c6fa516812'+'&submission_id=b3bd431978184f80403dd040f70e1cd8'

http.get(url, function(res) {
    var html = '';

    res.on('data', function(data) {
        html += data;
    })

    res.on('end', function() {
        console.log(html)
        var htmlJSON = JSON.parse(html)
        console.log(htmlJSON)
    })
}).on('error', function() {
    console.log('获取课程数据出错')
})