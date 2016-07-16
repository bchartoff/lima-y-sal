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

$(document).ready(function(){
	d3.select("#bg1")
		.style("left", function(){
			console.log( (window.innerWidth - this.getBoundingClientRect().width)*.5)
			return (window.innerWidth - this.getBoundingClientRect().width)*.5 + "px"
		})
	d3.select("#bg2")
		.style("left", function(){
			console.log( (window.innerWidth - this.getBoundingClientRect().width)*.5)
			return (window.innerWidth - this.getBoundingClientRect().width)*.5 + "px"
		})
})
d3.select(window)
	.on("resize", function(){
		leftGutter = getLeftGutter();
		rightGutter = getRightGutter();

		d3.selectAll(".page-content")
			.style("margin-top", function(){
				return window.innerWidth + "px";
			})
			.style("margin-bottom", function(){
				return window.innerWidth/4	 + "px";
			})

	})
	d3.selectAll(".page-content")
		.style("margin-top", function(){
			return window.innerWidth + "px";
		})
		.style("margin-bottom", function(){
			return window.innerWidth/4 + "px";
		})


// $(document).on("load",function(){
// 	if($(".post-list") == null){
// 		window.scrollTo(0,window.innerWidth)
// 	}
// })

d3.select(window)
	.on("scroll",function(){
		d3.select("#bg1")
			.style("left",function(){
				return Math.max(leftGutter, (window.innerWidth - this.getBoundingClientRect().width)*.5-1*window.scrollY) + "px"
			})
		d3.select("#bg2")
			.style("left",function(){
				return Math.min(rightGutter, (window.innerWidth - this.getBoundingClientRect().width)*.5+1*window.scrollY) + "px"
			})

		d3.select("body")
			// .transition()
			// .duration(2000)
			.style("background",function(){
				var f = d3.interpolate("#20AF4B","#ffffff")
				return f(window.scrollY/window.innerHeight*.5)
			})
	})