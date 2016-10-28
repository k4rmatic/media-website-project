//fast and the furious movies
function FastAndFurious() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/TheFastandtheFurious.mp4", type: "video/mp4"}
        ],
        name: "The Fast and The Furious",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/2Fast2Furious.mp4", type: "video/mp4"}
        ],
        name: "2 Fast 2 Furious",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/TheFastandtheFuriousTokyoDrift.mp4", type: "video/mp4"}
        ],
        name: "The Fast And The Furious Tokyo Drift",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/Fast&Furious.mp4", type: "video/mp4"}
        ],
        name: "Fast & Furious",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/FastFive.mp4", type: "video/mp4"}
        ],
        name: "Fast Five",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/Fast&Furious6.mp4", type: "video/mp4"}
        ],
        name: "Fast & Furious6",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/Furious7.mp4", type: "video/mp4"}
        ],
        name: "Furious 7",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//mcu movies
function mcu() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/IronMan.mp4", type: "video/mp4"}
        ],
        name: "Iron Man",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/TheIncredibleHulk.mp4", type: "video/mp4"}
        ],
        name: "The Incredible Hulk",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/IronMan2.mp4", type: "video/mp4"}
        ],
        name: "Iron Man 2",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/Thor.mp4", type: "video/mp4"}
        ],
        name: "Thor",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/CaptainAmericaTheFirstAvenger.mp4", type: "video/mp4"}
        ],
        name: "Captain America The First Avenger",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/TheAvengers.mp4", type: "video/mp4"}
        ],
        name: "The Avengers",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/IronMan3.mp4", type: "video/mp4"}
        ],
        name: "Iron Man 3",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/ThorTheDarkWorld.mp4", type: "video/mp4"}
        ],
        name: "Thor The Dark World",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/CaptainAmericaTheWinterSoldier.mp4", type: "video/mp4"}
        ],
        name: "Captain America The Winter Soldier",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/AvengersAgeofUltron.mp4", type: "video/mp4"}
        ],
        name: "Avengers Age of Ultron",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/AntMan.mp4", type: "video/mp4"}
        ],
        name: "Ant Man",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/CaptainAmericaCivilWar.mp4", type: "video/mp4"}
        ],
        name: "Captain America Civil War",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//purge movies
function purge() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/ThePurge.mp4", type: "video/mp4"}
        ],
        name: "The Purge",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/ThePurgeAnarchy.mp4", type: "video/mp4"}
        ],
        name: "The Purge Anarchy",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/ThePurgeElectionYear.mp4", type: "video/mp4"}
        ],
        name: "The Purge Election Year",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//back to the future movies
function backtothefuture() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/BackToTheFuture.mp4", type: "video/mp4"}
        ],
        name: "Back To The Future",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/BackToTheFuturePart2.mp4", type: "video/mp4"}
        ],
        name: "Back To The Future Part 2",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/BackToTheFuturePart3.mp4", type: "video/mp4"}
        ],
        name: "Back To The Future Part 3",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//harry potter movies
function harrypotter() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/HarryPotterandtheSorcerersStone.mp4", type: "video/mp4"}
        ],
        name: "Harry Potter and the Sorcerers Stone",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/HarryPotterandtheChamberofSecrets.mp4", type: "video/mp4"}
        ],
        name: "Harry Potter and the Chamber of Secrets",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/HarryPotterandthePrisonerofAzkaban.mp4", type: "video/mp4"}
        ],
        name: "Harry Potter and the Prisoner of Azkaban",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/HarryPotterandtheGobletofFire.mp4", type: "video/mp4"}
        ],
        name: "Harry Potter and the Goblet of Fire",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/HarryPotterandtheOrderofthePhoenix.mp4", type: "video/mp4"}
        ],
        name: "Harry Potter and the Order of the Phoenix",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/HarryPotterandtheHalfBloodPrince.mp4", type: "video/mp4"}
        ],
        name: "Harry Potter and the Half Blood Prince",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/HarryPotterandtheDeathlyHallowsPart1.mp4", type: "video/mp4"}
        ],
        name: "Harry Potter and the Deathly Hallows Part 1",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/HarryPotterandtheDeathlyHallowsPart2.mp4", type: "video/mp4"}
        ],
        name: "Harry Potter and the Deathly Hallows Part 2",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//insidious movies
function insidious() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/Insidious.mp4", type: "video/mp4"}
        ],
        name: "Insidious",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/InsidiousChapter2.mp4", type: "video/mp4"}
        ],
        name: "Insidious Chapter 2",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/InsidiousChapter3.mp4", type: "video/mp4"}
        ],
        name: "Insidious Chapter 3",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//kung fu panda movies
function kungfupanda() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/KungFuPanda.mp4", type: "video/mp4"}
        ],
        name: "Kung Fu Panda",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/KungFuPanda2.mp4", type: "video/mp4"}
        ],
        name: "Kung Fu Panda 2",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/KungFuPanda3.mp4", type: "video/mp4"}
        ],
        name: "Kung Fu Panda 3",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//lilo and stitch movies
function lilo() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/Lilo&Stitch.mp4", type: "video/mp4"}
        ],
        name: "Lilo & Stitch",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/Stitch!TheMovie.mp4", type: "video/mp4"}
        ],
        name: "Stitch! The Movie",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/LiloAndStitch2StitchHasaGlitch.mp4", type: "video/mp4"}
        ],
        name: "Lilo And Stitch 2 Stitch Has a Glitch",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/Leroy&Stitch.mp4", type: "video/mp4"}
        ],
        name: "Leroy & Stitch",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//maze movies
function maze() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/TheMazeRunner.mp4", type: "video/mp4"}
        ],
        name: "The Maze Runner",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/MazeRunnerTheScorchTrials.mp4", type: "video/mp4"}
        ],
        name: "Maze Runner The Scorch Trials",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//rush hour movies
function rushhour() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/RushHour.mp4", type: "video/mp4"}
        ],
        name: "Rush Hour",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/RushHour2.mp4", type: "video/mp4"}
        ],
        name: "Rush Hour 2",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/RushHour3.mp4", type: "video/mp4"}
        ],
        name: "Rush Hour 3",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//spider man movies
function spiderman() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/SpiderMan.mp4", type: "video/mp4"}
        ],
        name: "Spider Man",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/SpiderMan2.mp4", type: "video/mp4"}
        ],
        name: "Spider Man 2",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/SpiderMan3.mp4", type: "video/mp4"}
        ],
        name: "Spider Man 3",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//sherlock movies
function sherlock() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/SherlockHolmes.mp4", type: "video/mp4"}
        ],
        name: "Sherlock Holmes",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/SherlockHolmesAGameOfShadows.mp4", type: "video/mp4"}
        ],
        name: "Sherlock Holmes A Game Of Shadows",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//terminator movies
function terminator() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/TheTerminator.mp4", type: "video/mp4"}
        ],
        name: "The Terminator",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/Terminator2JudgmentDay.mp4", type: "video/mp4"}
        ],
        name: "Terminator 2 Judgment Day",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/Terminator3RiseofTheMachines.mp4", type: "video/mp4"}
        ],
        name: "Terminator 3 Rise of The Machines",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/TerminatorSalvation.mp4", type: "video/mp4"}
        ],
        name: "Terminator Salvation",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/TerminatorGenisys.mp4", type: "video/mp4"}
        ],
        name: "Terminator Genisys",
        thumbnail: false
    },
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//xmen movies
function xmen() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/X-Men.mp4", type: "video/mp4"}
        ],
        name: "X-Men",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/X-Men2.mp4", type: "video/mp4"}
        ],
        name: "X-Men2",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/X-MenTheLastStand.mp4", type: "video/mp4"}
        ],
        name: "X-Men The Last Stand",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/X-MenOriginsWolverine.mp4", type: "video/mp4"}
        ],
        name: "X-Men Origins Wolverine",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/X-MenFirstClass.mp4", type: "video/mp4"}
        ],
        name: "X-Men First Class",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/TheWolverine.mp4", type: "video/mp4"}
        ],
        name: "The Wolverine",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/X-MenDaysofFuturePast.mp4", type: "video/mp4"}
        ],
        name: "X-Men Days of Future Past",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//pirates of the caribbean movies
function pirates() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/PiratesoftheCaribbeanTheCurseofTheBlackPearl.mp4", type: "video/mp4"}
        ],
        name: "Pirates of the Caribbean The Curse of The Black Pearl",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/PiratesoftheCaribbeanDeadMansChest.mp4", type: "video/mp4"}
        ],
        name: "Pirates of the Caribbean Dead Mans Chest",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/PiratesoftheCaribbeanAtWorldsEnd.mp4", type: "video/mp4"}
        ],
        name: "Pirates of the Caribbean At Worlds End",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/PiratesoftheCaribbeanOnStrangerTides.mp4", type: "video/mp4"}
        ],
        name: "Pirates of the Caribbean On Stranger Tides",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//ice age movies
function iceage() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/IceAge.mp4", type: "video/mp4"}
        ],
        name: "Ice Age",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/IceAgeTheMeltdown.mp4", type: "video/mp4"}
        ],
        name: "Ice Age The Meltdown",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/IceAgeDawnoftheDinosaurs.mp4", type: "video/mp4"}
        ],
        name: "Ice Age Dawn of the Dinosaurs",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/IceAgeContinentalDrift.mp4", type: "video/mp4"}
        ],
        name: "Ice Age Continental Drift",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/IceAgeCollisionCourse.mp4", type: "video/mp4"}
        ],
        name: "Ice Age Collision Course",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//jump street movies
function jumpstreet() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/21JumpStreet.mp4", type: "video/mp4"}
        ],
        name: "21 Jump Street",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/22JumpStreet.mp4", type: "video/mp4"}
        ],
        name: "22 Jump Street",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//men in black movies
function meninblack() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/MenInBlack.mp4", type: "video/mp4"}
        ],
        name: "Men In Black",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/MenInBlack2.mp4", type: "video/mp4"}
        ],
        name: "Men In Black 2",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/MenInBlack3.mp4", type: "video/mp4"}
        ],
        name: "Men In Black 3",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//madagascar movies
function madagascar() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/Madagascar.mp4", type: "video/mp4"}
        ],
        name: "Madagascar",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/MadagascarEscape2Africa.mp4", type: "video/mp4"}
        ],
        name: "Madagascar Escape 2 Africa",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/Madagascar3EuropesMostWanted.mp4", type: "video/mp4"}
        ],
        name: "Madagascar 3 Europe's Most Wanted",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//hotel transylvania movies
function hotel() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/HotelTransylvania.mp4", type: "video/mp4"}
        ],
        name: "Hotel Transylvania",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/HotelTransylvania2.mp4", type: "video/mp4"}
        ],
        name: "Hotel Transylvania 2",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
//transformers movies
function transformers() {
    playlist_enable();
    var player = videojs("video");
    player.playlist([{
        sources: [
            {src: "http://81.111.188.191/media/movies/Transformers.mp4", type: "video/mp4"}
        ],
        name: "Transformers",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/TransformersRevengeOfTheFallen.mp4", type: "video/mp4"}
        ],
        name: "Transformers Revenge Of The Fallen",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/TransformersDarkOfTheMoon.mp4", type: "video/mp4"}
        ],
        name: "Transformers Dark Of The Moon",
        thumbnail: false
    },
    {
        sources: [
            {src: "http://81.111.188.191/media/movies/TransformersAgeofExtinction.mp4", type: "video/mp4"}
        ],
        name: "Transformers Age of Extinction",
        thumbnail: false
    }
    ], 1);

    //Loads the video into the player ready to play
    player.playlist.first();
    Materialize.toast("Movie Loaded, Please press play at the top of the page!", 3000);
}
