import { Buffer } from "buffer";
globalThis.Buffer = Buffer;
import { compile } from "lang64k";

(document.querySelector("#run") as HTMLButtonElement).addEventListener("click", () => {
    const compiled = compile((document.querySelector("#code") as HTMLTextAreaElement).value);
    const hex = Array.from(compiled).map((x: any) => x.toString(16).padStart(2, "0")).join("");
    (document.querySelector("#emulator") as HTMLIFrameElement).src = `emulator/index.html?${Date.now()}#${hex}`;
})