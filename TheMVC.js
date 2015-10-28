// Place to store videos
var videos = [];
// string for the api key
var searchString = '';
// This sets the right url for our api call
// The MVC!
var onSearch = {
    $el: $('<div class="post">').appendTo($('#searchcolumn')),
    // A key that holds all of our click handlers.
    init: function() {
        $('#search').on('click', this.getVideos);
    },
    apiCall: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchString + '&key=AIzaSyAUcyyoRT0BzGf2oDK17-BWlw4HJjQ5lNw',
    // the event handler for our Search button.
    getVideos: function() {
        var searchInput = $('#searchInput').val(); //Gets value of input box
        var searchArr = searchInput.split(" "); //Seperates individual words of input box into an array
        for (var i = 0; i < searchArr.length - 1; i++) {
            searchString += searchArr[i] + "+";
        }
        searchString += searchArr[searchArr.length - 1];
        this.apiCall = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchString + '&key=AIzaSyAUcyyoRT0BzGf2oDK17-BWlw4HJjQ5lNw'; //creates the api call
        //Submits the api call to the server
        var thisVid = this;
        $.get(this.apiCall, function(item) {
            thisVid.attributes = item;
            // Logs the objects we need
            console.log(item);
            // console.log(item.items[i].id.videoId);
            // console.log(item.items[i].snippet.title);
            // logging the id's we need to to embed search videos
            for (var i = 0; i < item.items.length; i++) {
                console.log(item.items[i].id.videoId);
                var url = item.items[i].id.videoId;
                var title = item.items[i].snippet.title;
                onSearch.render(url, title);
            }
            videos.push(this);
            console.log(videos);
        });
        searchString = ''; //resets searchString
    },
    render: function(url, title) {
        this.$el.append([
            $('<iframe src="https://www.youtube.com/embed/' + url + '">'  ).append(url),
            $('<div>').addClass('body').append(title)
        ]);
    }
};
$(document).ready(function() {
    onSearch.init();
});
