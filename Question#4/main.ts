import { rejects } from "assert";
import { error } from "console";
import { resolve } from "path";

function fetchWithError() {
    return new Promise ((resolve, rejects)=>{
        setTimeout(()=>{
            const random = Math. random();
            if (random < 0.5){
                resolve("Data fetched successfully");
            } else{
                rejects("Data fetch failed");
            }
        },1000)
     })
}
fetchWithError()
.then((result)=>{
    console.log("success:", result);
})
.catch((error)=>{
    console.error("Error:", error);
    
})