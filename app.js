import {Toaster} from "./modules/toaster.js";
import {TOAST_DEGREE} from "./modules/enums.js";

function SuccessToast() {
    Toast(TOAST_DEGREE.SUCCESS);
}

function WarningToast() {
    Toast(TOAST_DEGREE.WARNING);
}

function ErrorToast() {
    Toast(TOAST_DEGREE.ERROR);
}

function Toast(degree) {
    let myMessage = document.getElementById("toastMessageCustomizer").value;
    if (myMessage === "") {
        myMessage = "{EMPTY}" + new Date().toISOString();
    }
    myToaster.MakeToast(myMessage, degree);
}

let myToaster = new Toaster(5000);

window.SuccessToast = SuccessToast;
window.WarningToast = WarningToast;
window.ErrorToast = ErrorToast;