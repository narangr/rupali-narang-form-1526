function formValidation() {
    let fn = document.getElementById("fn").value;
    let em = document.getElementById("em").value;
    let text = document.getElementById("text").value;
    let btn = document.getElementById("btn");
    let myForm = document.getElementById("myform");
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let collectedData = {
        fn: "",
        em: "",
        text: ""
    };
    let errors = [];
    if (fn !== "") {
        collectedData.fn = fn;
    } else {
        errors.push("Fullname is missing.");
    }
    if (em !== "") {
        if (format.test(em)) {
            collectedData.em = em;
        } else {
            errors.push("Invalid email!");
        }
    } else {
        errors.push("E-mail is missing.");
    }
    if (text !== "") {
        collectedData.text = text;
    } else {
        errors.push("Message is missing.");
    }
    if (errors.length > 0) {
        console.log("Errors:")
        console.log(errors);
    } else {
        console.log("Collected Data:");
        console.log(collectedData);
        myform.reset();
    }
}
btn.addEventListener("click", formValidation);
