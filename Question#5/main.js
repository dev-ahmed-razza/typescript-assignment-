"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData() {
    return new Promise(function (resolve, rejects) {
        setTimeout(function () {
            var data = "Data fetched";
            resolve(data);
        }, 1000);
    });
}
function processData(data) {
    return new Promise(function (resolve, rejects) {
        setTimeout(function () {
            var processData = data.toUpperCase();
            resolve(processData);
        }, 150);
    });
}
function executeSequentially() {
    fetchData()
        .then(function (data) {
        return processData(data);
    })
        .then(function (processData) {
        console.log("Procssed data", processData);
    })
        .catch(function (error) {
        console.error("Erroe:", error);
    });
}
executeSequentially();
