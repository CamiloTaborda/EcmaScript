const anotherFunction = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve("Heeeeyyy!!")
      } else {
        reject("Whooooppsss!!")
      }
    })
}

anotherFunction()
.then(response => console.log('Resolved: ', response)) // Resolved:  Heeeeeeeyy!
.catch(error => console.log('Rejected: ', error))  // Rejected: Whooooopps!!!
.finally(() => console.log("Finally"));
