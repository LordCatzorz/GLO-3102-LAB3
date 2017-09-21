export const TOAST_DEGREE = {
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error"
};

export function EnumHasValue(myEnum, searchedValue) {
    for (let value in myEnum) {
        if (myEnum[value] === searchedValue) {
            return true;
        }
    }
    return false;
}