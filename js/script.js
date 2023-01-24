{
    const welcome = () => { console.log("Witam serdecznie") };

    const button = document.querySelector(".js-button");
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName");

    const init = () => {
        welcome();
        button.addEventListener("click", () => {
            body.classList.toggle("dark");

            themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";

        });
    }

    init();


}