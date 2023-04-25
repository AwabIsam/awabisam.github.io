const labelAreas = document.querySelectorAll(".label-area");
const lines = document.querySelectorAll(".line");

let buttonClicked = "";

labelAreas.forEach((line) => {
	line.addEventListener("click", (e) => {
		line.disabled = true;
		if (line.id === "line-1" && buttonClicked !== "line-1") {
			document.querySelector("#section-1").scrollIntoView({ behavior: "smooth" });
			buttonClicked = line.id;
			for (let i of lines) {
				i.classList.remove("extend");
				// i.classList.toggle("dark");
				if (i.id === line.id) {
					i.classList.toggle("extend");
				}
			}
		} else if (line.id === "line-2" && buttonClicked !== "line-2") {
			document.querySelector("#section-2").scrollIntoView({ behavior: "smooth" });
			buttonClicked = line.id;
			for (let i of lines) {
				console.log(i);
				console.log(line);
				i.classList.remove("extend");
				// i.classList.toggle("dark");
				if (i.id === line.id) {
					i.classList.toggle("extend");
				}
			}
		} else if (line.id === "line-3" && buttonClicked !== "line-3") {
			document.querySelector("#section-3").scrollIntoView({ behavior: "smooth" });
			buttonClicked = line.id;
			for (let i of lines) {
				i.classList.remove("extend");
				// i.classList.toggle("dark");
				if (i.id === line.id) {
					i.classList.toggle("extend");
				}
			}
		}

		setTimeout(() => {
			line.disabled = false;
		}, 1000);
	});
});

// Text Animation
const animationedObject = document.querySelector(".showcase-name");
const toBeanimated = document.querySelector(".showcase-p");

animationedObject.addEventListener("animationend", () => {
	toBeanimated.style.display = "block";
});

// Lotus Animation

const animationedText = document.querySelector(".showcase-p");
const toBeanimatedLotus = document.querySelector("#lotus");
animationedText.addEventListener("animationend", () => {
	toBeanimatedLotus.style.display = "block";
});

// After lotus animation

const animationedLotus = document.querySelector("#lotus");
const toBeViewed = document.querySelector(".view-proj-btn");
if (visualViewport.width < "1375") {
	animationedLotus.addEventListener("animationend", () => {
		toBeViewed.style.display = "block";
	});
}
