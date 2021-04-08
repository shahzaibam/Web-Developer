const getDataPromise = (num) => new Promise((resolve, reject) =>{
    setTimeout(() =>{
        typeof num === "number" ? resolve(num*2) : reject("number must ")
    }, 2000)
})


const hola = async (Data) => {
    const data = await getDataPromise("2")
    console.log(data)
    // throw Error("Something is wrong")
    // return 12
}
hola().then((data) => {
    console.log("data",data)
}).catch((err) =>{
    console.log("Error", err)
})

