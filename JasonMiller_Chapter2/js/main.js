function initialize(){
    cities();
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
        }]; //this is line 25 of Example 3.4

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
    $("table").attr('id','test');
};
var theid = $('#mydiv').attr('id');

//theid is 'mydiv'; add it as text to the div
$('#mydiv').append(theid);

//add the class 'foo' to the div
$('#mydiv').attr('class', 'foo');

//Check your work with the Inspector!
$('#mydiv').css('color', 'red');

//change the text size and alignment
$('#mydiv').css({
    'font-size': '2em',
    'text-align': 'left'
});

//get the text color and add it as text to the div
var thecolor = $('#mydiv').css('color');
$('#mydiv').append(thecolor);

//fooled ya! thecolor is rgb(255, 0, 0), the CSS interpreter's translation of the keyword 'red'
$('script').each(function(){
    var thesource = $(this).attr('src');
    $('#mydiv').append(thesource);
});

$(document).ready(function() {
    initialize();
    $("#test").on('click', function(){
        alert('Madison Rocks! Go Badgers!');
    });
  });

//DEBUGG CHAPTER
//remove the event listener
//$('table').off('click', clickme);

//call the initialize function when the document has loaded
//$(document).ready();