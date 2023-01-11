function waitForSecondaryChoice() {
    return new Promise((resolve) => {
        const buttons = document.querySelectorAll("#user-secondary-choice button");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                resolve(button.innerText);
            });
        });
    });
}

module.exports = waitForSecondaryChoice