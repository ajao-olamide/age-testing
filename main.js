const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const userList = document.querySelector("#users");
const msg = document.querySelector(".msg");
form.addEventListener("submit", onsubmit);

console.log(nameInput.value);
function onsubmit(e) {
  e.preventDefault();
  if (nameInput.value == "" || ageInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "please enter all  fields";

    setTimeout(() => msg.remove(), 3000);
  }
   else if (ageInput.value <= '12') {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : please go to the child section`));

    userList.appendChild(li);
    nameInput.value = '';
    ageInput.value = '';
}

    else if (ageInput.value <= '18' ) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : please go to the teenage section`));

        userList.appendChild(li);
        nameInput.value = '';
        ageInput.value = '';
    }

      else if (ageInput.value > '18'){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : please go to  the adult section`));


        userList.appendChild(li);



        nameInput.value = '';
       ageInput.value = '';
    }
}
