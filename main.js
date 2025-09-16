const moment = require('moment');

function getDate() {
    console.log(moment().format('YYYY/DD/MMHH:mm:ss'))
}

function getDay() {
    console.log(moment().format('dddd'))
}

getDate();
getDay();