//< " СКРИПТЫ " >=============================================================================================================>//

function selectGrade() {
	const gradeItem = document.querySelectorAll(".main-grade__btn");
	const field = document.querySelector(".main-field");

	gradeItem.forEach(btn => {
		btn.addEventListener("click", function () {
			gradeItem.forEach(btn => {
				btn.classList.remove("_active");
			});

			this.classList.add("_active");

			if (btn.classList.contains("_active")) {
				field.style.display = "flex";
			} else {
				field.style.display = "none";
			}
		});
	});
}
selectGrade()