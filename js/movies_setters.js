function FastAndFurious() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/2Fast2Furious.mp4", type: "video/mp4"}
        ],
        name: "Fast and Furious",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/2Fast2Furious.mp4", type: "video/mp4"}
        ],
        name: "2 Fast 2 Furious",
        thumbnail: false
    }], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}