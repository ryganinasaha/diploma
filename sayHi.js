
const email = document.querySelector(".emailh")
const nam = document.querySelector(".nameh")
const text = document.querySelector(".text")
const button = document.querySelector(".connectb")

button.addEventListener("click", async (event) => {
  event.preventDefault()
  
    const url = "https://my-first-web-server.onrender.com/send-hi";
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        from: nam.value,
        email: email.value,
        text: text.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  
    console.log(res);
  });
