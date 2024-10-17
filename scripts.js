let display = document.getElementById("display");

// Append number or operator to the display
function appendToDisplay(value) {
	display.value += value;
}

// Clear the entire display
function clearDisplay() {
	display.value = "";
}

// Delete the last character from the display
function deleteLast() {
	display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {
	try {
		display.value = eval(display.value);
	} catch (error) {
		display.value = "Error";
	}
}

// Memory functions
function memoryStore() {
	memory = parseFloat(display.value);
	document.getElementById("memoryDisplay").value = `Memory: ${memory}`;
}

function memoryClear() {
	memory = 0;
	document.getElementById("memoryDisplay").value = "Memory: 0";
}

function memoryRecall() {
	display.value = memory.toString();
}

function runSquareRoot() {
	const v = calculateSquareRoot(display.value);
	display.value = v;
}

function runSquare() {
	const v = calculateSquare(display.value);
	display.value = v;
}

function runReciprocal() {
	const v = calculateReciprocal(display.value);
	display.value = v;
}

function runSine() {
	const v = sine(display.value);
	display.value = v;
}

function runCosine() {
	const v = cosine(display.value);
	display.value = v;
}

function runTangent() {
	const v = tangent(display.value);
	display.value = v;
}

// Keyboard functionality
document.addEventListener("keydown", function (event) {
	const k = event.key;
	// if key is a number or operator
	if (!isNaN(k) || k == "+" || k == "-" || k == "/" || k == "*") {
		appendToDisplay(k);
	}

	// if key is enter calculate result
	if (k == "Enter" || k == "=") {
		calculateResult();
	}

	// if key is backspace, delete a char
	if (k == "Backspace") {
		deleteLast();
	}

	// if key is esc clear screen
	if (k == "Escape") {
		clearDisplay();
	}
});
