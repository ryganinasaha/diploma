
const person = document.querySelector(".person")
const email = document.querySelector(".email")
const number = document.querySelector(".number")
const date = document.querySelector(".date")
const foun = document.querySelector(".foun")
const button = document.querySelector(".formb")

button.addEventListener("click", async (event) => {
  event.preventDefault()
  
    const url = "https://my-first-web-server.onrender.com/send-order";
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        from: person.value,
        email: email.value,
        number: number.value,
        date: date.value,
        foun: foun.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  
    console.log(res);
  });
