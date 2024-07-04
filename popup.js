console.log("working...");

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickButton");
    const input = document.getElementById("inputArea");
    const result = document.getElementById("result");

    console.log(input);
    console.log(button);

    button.addEventListener("click", () => {
        console.log("Button clicked");
        console.log(input.value);
        getCurrency(input.value);
    });

  
    // fetch işlemi burada  mı olmalı ? 
    // background.js

    async function getCurrency(number) {
        console.log(number , "number");
        try {      
            const response = await fetch(
                `https://api.collectapi.com/economy/exchange?int=${number}&to=TRY&base=USD`,
                {
                    method: "GET",
                    headers: {
                        Authorization: "apikey 4TVXG1ntA9OwFJtUL6vCLJ:52Ni0sJ8TEBhaARvsXH5GF",
                        "content-type": "application/json",
                    },
                }
            );       
            const data = await response.json();
            console.log(data);
            result.innerText = data.result.data[0].calculated;
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
});

