function fetchdata(): Promise<string>{
    return new Promise<string>((resolve, reject) => {
        setTimeout(()=>{
            resolve("data fetched successfully")
        },1000)
    })
}
fetchdata()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error); 
  });



