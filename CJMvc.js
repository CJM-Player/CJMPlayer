// Place to store videos
var videos = [];

// string for the api key
var searchString = '';
// This sets the right url for our api call
var apiCall = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchString + '&key=AIzaSyAUcyyoRT0BzGf2oDK17-BWlw4HJjQ5lNw';



// The MVC!

var video = {
    // A key that holds all of our click handlers.
    init: function() {
        $('#search').on('click', this.getVideos);
    },
    $el: $('<div class="videoSearched">').appendTo($('.content')),

    // the event handler for our Search button.
    getVideos: function() {
        var searchInput = $('#searchInput').val(); //Gets value of input box
        var searchArr = searchInput.split(" "); //Seperates individual words of input box into an array 
        for (var i = 0; i < searchArr.length - 1; i++) {
            searchString += searchArr[i] + "+";
        }
        searchString += searchArr[searchArr.length - 1];
        apiCall = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchString + '&key=AIzaSyAUcyyoRT0BzGf2oDK17-BWlw4HJjQ5lNw'; //creates the api call
        //Submits the api call to the server
        $.get(apiCall, function(item){
          // Logs the objects we need 
          console.log(item); 
          
        for(var i = 0; i < item.items.length; i++){
            console.log(item.items[i].id.videoId);
        }
        }); 
        searchString = ''; //resets searchString
    },
};

$(document).ready(function() {
    video.init();
});
