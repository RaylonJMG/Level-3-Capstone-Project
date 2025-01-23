export function output(
	message = "",
	outputTag = "outputTag",
	shouldAppend = true
) {
	const outputElement = document.getElementById(outputTag);
	if (shouldAppend) outputElement.innerHTML += message;
	else outputElement.innerHTML += message;
}
