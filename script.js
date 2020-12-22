const $illustration = $("#illustration");

window.addEventListener("load", (e) => {
  console.log("page loaded");
  if (window.innerWidth <= 768) {
    $illustration.html(
      `<div><img src="./images/illustration-woman-online-mobile.svg" alt="Lady looking at screen" width="266" height="196"></div>`
    );
  } else {
    $illustration.html(`<div><img src="./images/illustration-woman-online-desktop.svg" alt="lady looking at screen" width="472"
          height="359">
      </div>
      <div><img src="./images/illustration-box-desktop.svg" alt="" width="191" height="184"></div>`);
  }
});

const questionContainer = document.querySelector(".questionContainer");

questionContainer.addEventListener("click", (e) => {
  let target = e.target;
  showAnswer(target);
});

function showAnswer(target) {
  console.log(target); // for debugging

  if (target.classList.contains("answer")) {
    console.log("theres a bug here");
    const questionWrapperDiv = target.parentElement;
    const questionParagraph = questionWrapperDiv.querySelector("div > p");
    const icon = questionWrapperDiv.querySelector("div > img");
    const answer = questionWrapperDiv.querySelector(".answer");

    if (answer.classList.contains("inactive")) {
      questionParagraph.classList.add("focus");
      icon.classList.add("rotate");
      answer.classList.replace("inactive", "active");
      questionParagraph.classList.remove("separator");
    } else if (answer.classList.contains("active")) {
      questionParagraph.classList.remove("focus");
      icon.classList.remove("rotate");
      answer.classList.replace("active", "inactive");
      questionParagraph.classList.add("separator");
    }
  } else if (target.classList.contains("question")) {
    const questionWrapperDiv = target;
    const questionParagraph = questionWrapperDiv.querySelector("div > p");
    const icon = questionWrapperDiv.querySelector("div > img");
    const answer = questionWrapperDiv.querySelector(".answer");

    if (answer.classList.contains("inactive")) {
      questionParagraph.classList.add("focus");
      icon.classList.add("rotate");
      answer.classList.replace("inactive", "active");
      questionParagraph.classList.remove("separator");
    } else if (answer.classList.contains("active")) {
      questionParagraph.classList.remove("focus");
      icon.classList.remove("rotate");
      answer.classList.replace("active", "inactive");
      questionParagraph.classList.add("separator");
    }
  } else {
    const questionParagraphParentDiv = target.parentElement;
    const questionWrapperDiv = questionParagraphParentDiv.parentElement;
    const answer = questionWrapperDiv.querySelector(".answer");
    const questionParagraph = questionWrapperDiv.querySelector("p");
    const icon = questionWrapperDiv.querySelector("div > img");

    if (answer.classList.contains("inactive")) {
      questionParagraph.classList.add("focus");
      icon.classList.add("rotate");
      answer.classList.replace("inactive", "active");
      questionParagraph.classList.remove("separator");
    } else if (answer.classList.contains("active")) {
      questionParagraph.classList.remove("focus");
      icon.classList.remove("rotate");
      answer.classList.replace("active", "inactive");
      questionParagraph.classList.add("separator");
    }
  }
}
