/* 

Dark Sans JavaScript 

Instead of document.addEventListener() with DOMContentLoaded, put your initialization code inside the "initalize()" function.
Make sure its starting line is "export function initializePage() {" and leave in the first console log message.

Your first statement should be to call confirmTheme() with the name of your theme, as shown below.

*/

// start your JS here
export function initializePage() {

    // call main function that outputs message to console and update page title
    confirmTheme("Dark Sans");

    // move the aside to the end of main
    let currentAside = document.querySelector("aside");
    document.querySelector("main").append(currentAside);

    // insert h2 at the beginning of the aside block
    let newAsideTitle = document.createElement("h2");
    newAsideTitle.innerHTML = "Types of Design";
    currentAside.insertBefore(newAsideTitle, currentAside.children[0]);

}
