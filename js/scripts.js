function Destinations(location, landmarks, season, notes, accompanied) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
  this.accompanied = accompanied;
}

$(function() {
  $("form#new-vacation").submit(function(event) {
    event.preventDefault();

    var locationInput = $("input#vacation-location").val();
    var landmarksInput = $("input#vacation-landmarks").val();
    var seasonInput = $("input#vacation-season").val();
    var notesInput = $("input#vacation-notes").val();
    var accompaniedInput = $("input#vacation-accompanied").val();


    var newDestination = new Destinations(locationInput,landmarksInput,seasonInput,notesInput,accompaniedInput);
    console.log(newDestination);

    $('#destinations').append('<li><span class="show">'+newDestination.location+'</span></li>');
    $('.show').last().click(function(){
      console.log('test');
      $('#location').text(newDestination.location);
      $('#landmarks').text(newDestination.landmark);
      $('#season').text(newDestination.season);
      $('#notes').text(newDestination.notes);
      $('#accompanied').text(newDestination.accompanied);
    });

    $('#new-vacation')[0].reset();
  });
});
