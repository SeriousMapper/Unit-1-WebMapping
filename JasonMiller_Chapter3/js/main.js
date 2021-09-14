//initialize function called when the script loads
function initialize(){
	cities();
    debugAjax();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    //DEBUG: events and add columns should be added within the cities function
    addEvents();
	addColumns(cityPop);
	$("table").attr('id','test');
};

function addColumns(cityPop){
    
    $('tr').each(function(i){

    	if (i == 0){
    		$(this).append('<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){
	//add random color on mouseover
	$('table').mouseover(function(){
		
		var color = "rgb(";
		//generate random color
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);
			color += random;

			if (i<2){
				color += ",";
			} else {
				color += ")";
			};
		}
		//outputs a string for the random color, and adds it to the css style
		$(this).css('color', color);
	});
// click me function, alerts the user when they have clicked the page
	function clickme(){
		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(function() {
    initialize();
    $("#test").on('click', function(){
        alert('Madison Rocks! Go Badgers!');
    });
  });
function debugCallback(response){
	console.log(response);
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(response));
};

function debugAjax(){
	
	var mydata;

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			mydata = response;
			debugCallback(mydata);
		}
	});

	//$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};
