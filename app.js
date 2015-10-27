var searchString = '';
var apiCall = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchString + '&key=AIzaSyAUcyyoRT0BzGf2oDK17-BWlw4HJjQ5lNw';

$('#search').click(function() {
    var searchInput = $('#searchInput').val(); //Gets value of input box
    var searchArr = searchInput.split(" "); //Seperates individual words of input box into an array 

    for (var i = 0; i < searchArr.length - 1; i++) {
        searchString += searchArr[i] + "+";
    }

    searchString += searchArr[searchArr.length - 1];
    console.log(searchString);
    apiCall = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchString + '&key=AIzaSyAUcyyoRT0BzGf2oDK17-BWlw4HJjQ5lNw'; //creates the api call
    console.log(apiCall);
    $.get(apiCall).success(to_be_run_on_server_response); //Submits the api call to the server
    searchString = ''; //resets searchString
});

var to_be_run_on_server_response = function(data) {

    console.log(data);
};
