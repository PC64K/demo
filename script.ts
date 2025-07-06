import { Buffer } from "buffer";
globalThis.Buffer = Buffer;
import { compile } from "lang64k";

(document.querySelector("#dl") as HTMLButtonElement).addEventListener("click", () => {
    const compiled = compile((document.querySelector("#code") as HTMLTextAreaElement).value);
    const blob = new Blob([compiled], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "name.pc64e";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
});

(document.querySelector("#run") as HTMLButtonElement).addEventListener("click", () => {
    const compiled = compile((document.querySelector("#code") as HTMLTextAreaElement).value);
    const hex = Array.from(compiled).map((x: any) => x.toString(16).padStart(2, "0")).join("");
    (document.querySelector("#emulator") as HTMLIFrameElement).src = `emulator/index.html?${Date.now()}#${hex}`;
})