function simulateTask() {
    setTimeout(function () {
        console.log("task starteds");
    }, 2000);
    console.log("task started");
    setTimeout(function () {
        console.log("task completed");
    }, 1000);
}
simulateTask();
