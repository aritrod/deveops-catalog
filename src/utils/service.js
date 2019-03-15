var $ = require("jquery");


export function createIssue(url=``, options={}) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": options.method || "GET",
        "headers": {
          "authorization": `token ${options.token}`,
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "user-agent": "simplified-pipelines"
        },
        data : JSON.stringify(options.data)
    }
   return $.ajax(settings);
    }