import { atom } from "recoil";

export const darkModeState = atom({
    key: "darkModeState",
    default: false
})

export const handleInput = atom({
    key: "handleInput",
    default: ""
})