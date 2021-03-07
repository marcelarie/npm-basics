const moment = require('moment');
// import moment from 'moment';

/**
 * TODO: all getters, all get method must return a value
 * */

function getFullDate() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}

function getWeekDay() {
    return moment().format('dddd');

}

function getCurrentMonth() {
    return moment().format('MMMM');
}

function getCurrentYear() {
    return moment().format('YYYY');
}

module.exports = {
    getFullDate: getFullDate,
    getCurrentDay: getWeekDay,
    getCurrentMonth: getCurrentMonth,
    getCurrentYear: getCurrentYear,
};
