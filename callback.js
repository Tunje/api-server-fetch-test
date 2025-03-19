const flipCoin = () => {
    return new Promise((resolve, reject) => {
      let result = Math.random()
    
      if(result > 0.5) {
        console.log("Heads")
        fetch("https://api.adviceslip.com/advice").then((response) => {
            return response.json();
        }).then((data) => {
            resolve(data);
        }).catch((error) => {
            reject("failed to fetch data", error);
        })
      } else {
        reject("Tails");
      }
    })
}








