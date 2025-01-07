export function output(message = "message", outputTag = "outputTag", shouldAppend = true) {
    if (shouldAppend) window[outputTag].innerHTML += message;
    else window[outputTag].innerHTML += message;
}