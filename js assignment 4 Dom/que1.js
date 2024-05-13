function swapTheme() {
    //write your code
    console.log("function Called");
    const element = document.getElementsByClassName("day");
    const button = document.getElementsByClassName("button_day");

    console.log(element[0].classList.toggle("night"))
    button[0].classList.toggle("button_night");
}
