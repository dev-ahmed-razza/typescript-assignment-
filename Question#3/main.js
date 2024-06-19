function fetchdata() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("data fetched successfully");
        }, 1000);
    });
}
fetchdata()
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) {
    console.error(error);
});
