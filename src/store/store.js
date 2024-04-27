import { atom } from "nanostores";

export const themeStore = atom(
    typeof localStorage !== "undefined" && localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
);
