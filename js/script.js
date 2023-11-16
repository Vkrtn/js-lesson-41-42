const secondForm = document.forms.secondForm;
const fullName = secondForm.fullName;
const secondAge = secondForm.age;
const validation = secondForm.fildes.elements;
const submitBtn = secondForm.submitSecond;
const validArr = Array.from(validation);
const speCh= /["!"#$%&'§()*+,-./:;<=>?@\^_`{|}~"]/g
const validObj = {
  age: false,
  fullName: false,
};

  fullName.oninput = function (event) {
    event.preventDefault();

    if (fullName.value.length >= 5 && speCh.test(fullName.value)) {
      validObj[1] = true;
      fullName.parentElement.classList.remove("fail");
      if (
        Object.values(validObj)[0] == true &&
        Object.values(validObj)[1] == true
      ) {
        submitBtn.classList.add("sucsess");
      }
    } else {
      fullName.parentElement.classList.add("fail");
      submitBtn.classList.remove("sucsess");
    }
  };

secondAge.oninput = (e) => {
    e.preventDefault()
  if (secondAge.value.length <= 2 && secondAge.value >= 18) {
    validObj[0] = true;
    secondAge.parentElement.classList.remove("fail");
    if (
      Object.values(validObj)[0] == true &&
      Object.values(validObj)[1] == true
    ) {
      submitBtn.classList.add("sucsess");
    }
  } else {
    secondAge.parentElement.classList.add("fail");
    submitBtn.classList.remove("sucsess");
  }
};

secondForm.onsubmit = (e) => {
  for (let el of validation) {
    e.preventDefault();
    const value = el.value;
    if (!value) {
      el.parentElement.classList.add("fail");
    }
  }

  if (submitBtn.classList.contains("sucsess")) {
    secondForm.submit();
  }
};
//   let filteredArr = validArr.filter((el) => {
//     return el.value;
//   }).length;

//   let inValid = filteredArr;

//   for (let el of validation) {
//     const value = el.value;
//     const name = el.name;

//     if (!value) {
//       el.parentElement.classList.add("fail");
//       alert(`${el.name} is not defind`);
//       inValid = false;
//     }
//     else {   }
//   }
//   if (inValid) {
//     submitBtn.classList.add("sucsess");
//     // console.log("sucess");
//   }

//   fullName.value = ''
//   secondAge.value = ''
// };
