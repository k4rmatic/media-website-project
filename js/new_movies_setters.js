function ThePurge() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/new_movies/ThePurge.mp4", type: "video/mp4"}
        ],
        name: "The Purge",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/new_movies/ThePurgeAnarchy.mp4", type: "video/mp4"}
        ],
        name: "The Purge Anarchy",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/new_movies/ThePurgeElectionYear.mp4", type: "video/mp4"}
        ],
        name: "The Purge Election Year",
        thumbnail: false
    }], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
