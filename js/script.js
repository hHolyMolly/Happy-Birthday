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

var tx = document.getElementsByTagName('textarea');
for (var i = 0; i < tx.length; i++) {
	tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
	tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
	this.style.height = 'auto';
	this.style.height = (this.scrollHeight) + 'px';
}