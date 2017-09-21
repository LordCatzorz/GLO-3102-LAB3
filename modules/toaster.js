import {EnumHasValue, TOAST_DEGREE} from "./enums.js";

export class Toaster {
    constructor(duration = 3000, defaultDegree = TOAST_DEGREE.SUCCESS) {
        this.duration = duration;
        this.defaultDegree = defaultDegree;
        this.theToaster = document.createElement("div");
        this.theToaster.classList.add("toaster");
        document.body.appendChild(this.theToaster);
    }

    MakeToast(message = "", degree = this.defaultDegree) {
        if (!EnumHasValue(TOAST_DEGREE, degree)) {
            degree = TOAST_DEGREE.SUCCESS;
        }

        let toast = document.createElement("div");
        let myId = "toast" + new Date().getTime();
        toast.classList.add("toast", degree);
        toast.innerText = message;
        toast.id = myId;
        this.theToaster.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, this.duration)

    }

}
