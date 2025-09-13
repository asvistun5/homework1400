const moment = require('moment');

function getDate() {
    console.log(moment().format('YYYY/DD/MMHH:mm:ss'))
}

getDate();