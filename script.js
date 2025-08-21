// Run Button Logic
const runBtn = document.getElementById("runBtn");
const codeInput = document.getElementById("codeInput");
const output = document.getElementById("output");

runBtn.addEventListener("click", () => {
  try {
    const userCode = codeInput.value;
    const result = eval(userCode);
    output.textContent = result !== undefined ? result : "Code ran successfully!";
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
});