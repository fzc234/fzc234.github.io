$(document).ready(function()
{
	slide("#horizontal-navigation", 15, 0, 150, .8);
});

function slide(navigation_id, pad_out, pad_in, time, multiplier)
{
	// creates the target paths
	var list_elements = navigation_id + " li.sliding-element1";
	var link_elements = list_elements + " a";

	// initiates the timer used for the sliding animation
	var timer = 0;

	// NEW CODE BEGIN

	var list = document.querySelectorAll(list_elements);

	for (i = 0; i < list.length - 1; i++) {
	  $(list[i]).css("margin-left","-180px");
	  // updates timer
	  timer = (timer*multiplier + time);
	  $(list[i]).animate({ marginLeft: "0" }, timer);
	}

	// NEW CODE END
}
