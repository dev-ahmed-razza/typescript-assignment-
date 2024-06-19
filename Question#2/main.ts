// Question#2
// Write a function simulateTask that simulates a task by logging 
// " Task started " , waits for I second , and then logs " Task completed " . Use setTimeout for the delay

function simulateTask():void{
    setTimeout(() =>{
        console.log("task starteds");//3
    },2000)
    console.log("task started");//1
    setTimeout(() =>{
        console.log("task completed");//2
    },1000)
}
simulateTask();