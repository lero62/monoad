
function calcStickyCSA() {
	var $elCSA, currentTop, heightDiff, heightDiffWin, top, hDiffs;
	top = $(".card-wrapper__middle")
	hDiffs = $(".js-CSA-el")
	for (var i = 0; i < hDiffs.length; i++) {
		var hDiff = hDiffs[i]
		heightDiff = $(hDiff).outerHeight() + top.offset().top + 30
		heightDiffWin = $(hDiff).outerHeight()
		if (window.innerHeight < heightDiff) {
			heightDiffWin = window.innerHeight - heightDiffWin - 30
			$(hDiff).css("top", heightDiffWin)
		} else {
			$(hDiff).removeAttr('style')
		}
	}

}

$(window).on("resize load scroll", function () {
	calcStickyCSA()
})