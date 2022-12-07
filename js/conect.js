
const person = document.querySelector("#myModal .person")
const email = document.querySelector("#myModal .email")
const number = document.querySelector("#myModal .number")
const date = document.querySelector("#myModal .date")
const foun = document.querySelector("#myModal .foun")
const button = document.querySelector("#myModal .formb")

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
