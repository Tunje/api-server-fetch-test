const flipCoin = async () => {
  try{
    const result = Math.random()
    
    if(result > 0.5) {
        console.log("Heads")
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        return data;
      } else {
        throw "Tails";
      }
    } catch (error) {
    throw error;
    }
  }






