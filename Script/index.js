let btn = document.querySelectorAll(".num");
var textarea = "";
let a;
document.querySelector("#textarea").addEventListener("keypress", (event) => {
  console.log("key log= ", event.key);
  if (event.key == "Enter") {
    console.log("inside enter", textarea);
    equal();
  } else {
    textarea = textarea + event.key;
  }
  console.log("final = ", textarea);
});
document.querySelector("#textarea").addEventListener("keydown", (event) => {
  console.log("key log= ", event.key);
  if (event.key === "Backspace" || event.key === "Delete") {
    var a = textarea.toString();

    a = a.substring(0, a.length - 1);
    textarea = a;

    console.log("inside backspace", a);
    //equal();
  }
  console.log("final = ", textarea);
});
function display(a) {
  textarea = textarea + a;
  console.log(textarea);
  document.querySelector("#textarea").value = textarea;
}
btn.forEach((bt) => {
  bt.addEventListener("click", () => {
    display(bt.value);
  });
});
function clean() {
  textarea = "";
  console.log(textarea);
  document.querySelector("#textarea").value = "0";
}
function equal() {
  if (
    textarea.includes("+") ||
    textarea.includes("-") ||
    textarea.includes("*") ||
    textarea.includes("/")
  ) {
    textarea = eval(textarea);
    document.querySelector("#textarea").value = textarea;
  } else {
    if (textarea.includes("^")) {
      let b = textarea.split("^");
      console.log(b);
      textarea = Math.pow(b[0], b[1]);
      console.log(textarea);
      document.querySelector("#textarea").value = textarea;
    } else if (textarea.includes("√")) {
      let b = textarea.split("√ ");
      console.log(b);
      textarea = Math.sqrt(b[1]);
      console.log(textarea);
      document.querySelector("#textarea").value = textarea;
    } else if (textarea.includes("sin")) {
      let b = textarea.split("sin ");
      console.log(b);
      textarea = Math.sin(b[1]);
      console.log(textarea);
      document.querySelector("#textarea").value = textarea;
    } else if (textarea.includes("tan")) {
      let b = textarea.split("tan ");
      console.log(b);
      textarea = Math.tan(b[1]);
      console.log(textarea);
      document.querySelector("#textarea").value = textarea;
    } else if (textarea.includes("cos")) {
      let b = textarea.split("cos ");
      console.log(b);
      textarea = Math.cos(b[1]);
      console.log(textarea);
      document.querySelector("#textarea").value = textarea;
    }
  }
}
function sqrt() {
  textarea = textarea != "" ? "√ " + textarea + "" : "√ ";
  document.querySelector("#textarea").value = textarea;
}
function sin() {
  textarea = textarea != "" ? "sin " + textarea + "" : "sin ";
  document.querySelector("#textarea").value = textarea;
}
function tan() {
  textarea = textarea != "" ? "tan " + textarea + "" : "tan ";
  document.querySelector("#textarea").value = textarea;
}
function cos() {
  textarea = textarea != "" ? "cos " + textarea + "" : "cos ";
  document.querySelector("#textarea").value = textarea;
}
function pow() {
  textarea = textarea != "" ? textarea : "1";
  textarea = textarea + "^";
  document.querySelector("#textarea").value = textarea;
}

// btn.addEventListener("click", function () {
//   console.log("aapple");
// });
// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.querySelectorAll("#input button");
//     let textarea = document.getElementById("textarea");

//     function display(a) {
//       textarea.value += a;
//       console.log(textarea.value);
//     }
//     buttons.forEach(function(button) {
//         button.addEventListener("click", function() {
//           display(button.value);
//         });
//       });
//   });
