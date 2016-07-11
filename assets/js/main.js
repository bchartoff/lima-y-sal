var getLeftGutter = function(){
	var left = d3.select(".wrapper").node().getBoundingClientRect().left
	var bg_width = d3.select("#bg1").node().getBoundingClientRect().width
	return left-bg_width
}
var getRightGutter = function(){
	var right = d3.select(".wrapper").node().getBoundingClientRect().right
	var bg_width = d3.select("#bg1").node().getBoundingClientRect().width
	return right
}
var leftGutter = getLeftGutter();
var rightGutter = getRightGutter();

d3.select(window)
	.on("resize", function(){
		leftGutter = getLeftGutter();
		rightGutter = getRightGutter();
	})

d3.select(window)
	.on("scroll",function(){
		console.log("foo")

		d3.select("#bg1")
			.style("left",function(){
				return Math.max(leftGutter, -1*window.scrollY) + "px"
			})
		d3.select("#bg2")
			.style("left",function(){
				return Math.min(rightGutter, 1*window.scrollY) + "px"
			})

		d3.select("body")
			.transition()
			.duration(2000)
			.style("background","#fff")
	})