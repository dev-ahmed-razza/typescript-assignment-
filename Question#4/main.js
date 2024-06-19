"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchWithError() {
    return new Promise(function (resolve, rejects) {
        setTimeout(function () {
            var random = Math.random();
            if (random < 0.5) {
                resolve("Data fetched successfully");
            }
            else {
                rejects("Data fetch failed");
            }
        }, 1000);
    });
}
fetchWithError()
    .then(function (result) {
    console.log("success:", result);
})
    .catch(function (error) {
    console.error("Error:", error);
});
