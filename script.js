window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};

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
const showcaseName = document.querySelector(".showcase-name");
const showcaseTitle = document.querySelector(".showcase-title");
const Lotus = document.querySelector("#lotus");
const showcasePara = document.querySelector(".showcase-p");
const viewProjbtn = document.querySelector(".view-proj-btn");

showcaseName.addEventListener("animationend", () => {
	showcaseTitle.style.display = "block";
});

// Lotus Animation

showcaseTitle.addEventListener("animationend", () => {
	Lotus.style.display = "block";
});

// After lotus animation

// Lotus.addEventListener("animationend", () => {
// 	if (visualViewport.width < "1375") {
// 		viewProjbtn.style.display = "block";
// 	}
// 	showcaseName.style.transform = "translate(0, -100%)";
// 	showcaseTitle.style.transform = "translate(-1000%, 0)";
// 	showcaseTitle.style.opacity = "0";
// 	showcasePara.style.display = "block";
// });
// console.log(showcaseName);
// console.log(Lotus);
// console.log(showcaseTitle);
