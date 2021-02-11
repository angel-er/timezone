import moment, {tz} from "moment-timezone";

export const transformtimezone = timezone => {
    const frmDate = "DD-MM-YYYY";
    const frmTime = "LT";

    return {
        date: tz(timezone).format(frmDate),
        time: tz(timezone).format(frmTime)
    }
}