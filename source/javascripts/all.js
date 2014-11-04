//= require_tree .

var apiKey = 'OhYCz7P9q7cXNoMODeV8mHvkMFfEGzBiG4C8pP3C';
var dataRequest = 'https://api.data.gov/gsa/auctions?api_key=' + apiKey + '&format=JSON&LocationST=MA&callback=?';


$('h1').on('click', function(){
  $.getJSON(dataRequest, function(data) {
    console.log(data); //uncomment this for debug
  //   //alert (data.item1+" "+data.item2+" "+data.item3); //further debug
  //   //$('#showdata').html("<p>item1="+data.item1+" item2="+data.item2+" item3="+data.item3+"</p>");
  });
});

// $('h1').on('click', function() {
//   alert("hey");
// })