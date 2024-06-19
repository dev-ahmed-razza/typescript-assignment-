// Question#1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2 - second delay using setTimeout .

async function fetchGreeting(): Promise<string>{
return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("Hello, Ahmed");
    }, 2000)
})
}
async function sdghjjkk() {
    const gieeting = await fetchGreeting();
    console.log(gieeting);
}
sdghjjkk();


