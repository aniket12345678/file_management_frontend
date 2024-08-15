import { toast } from "react-toastify";

export function toastMessage(type, message) {
    toast[type](message);
}