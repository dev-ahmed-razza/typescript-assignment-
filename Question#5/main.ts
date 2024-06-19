import { rejects, strict } from "assert";
import { error } from "console";
import { resolve } from "path";

function fetchData(): Promise<string>{
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            const data = "Data fetched";
            resolve(data);
        },1000);
    });
}
function processData(data: any){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            const processData =data.toUpperCase();
            resolve(processData);
        }, 150);
    });
}
function executeSequentially(){
    fetchData()
    .then((data)=>{
        return processData(data);
    })
    .then((processData)=>{
        console.log("Procssed data", processData);
    })
    .catch((error)=>{
        console.error("Erroe:",error);  
    });
}
executeSequentially();