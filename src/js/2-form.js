const formData = {
    email: "",
    message: "",
};
const form = document.querySelector(".feedback-form");
const KEY = "feedback-form-state";  
form.addEventListener("input", (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    formData[name] = value;
    localStorage.setItem(KEY, JSON.stringify(formData));
});
const savedData = localStorage.getItem(KEY);
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
    return alert("Fill please all fields");
    }
    console.log(formData);
    localStorage.removeItem(KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
});