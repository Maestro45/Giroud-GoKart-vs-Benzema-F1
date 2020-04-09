$(function(){

    


    $("#race").click(function(){

        function checkIfComplete (){
            if(completeRace == false){
                completeRace = true;
            } else{
                place = "2nd";
            }
        };

        function benzemaWinner (){
            if(place == "2nd"){
                $("container").css({
                    opacity: "0.5",
                });
                $("#picture").attr({
                    src: "Images/Benzema wins.jpg"
                }
                );

                $("h2 span").text("Benzema")
                $("#container2").show();

            }
        };

        function giroudWinner (){
            if(place == "2nd"){
                $("container").css({
                    opacity: "0.5",
                });
                $("#picture").attr({
                    src: "Images/Giroud wins.jpg"
                }
                );

                $("h2 span").text("Giroud")
                $("#container2").show();

            }
        };


        var car1width = $("#goKart").width();
        var car2width = $("#raceCar").width();

        var raceTrackWidth1 = $("#container").width() - car1width;
        var raceTrackWidth2 = $("#container").width() - car2width;

        var raceTime1 = Math.floor( (Math.random() * 4000) + 1000);
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1000);

        var completeRace = false;

        var place = "1st";


        $("#goKart").animate({
            left:raceTrackWidth1

        },raceTime1,function(){

            checkIfComplete()

            $("#raceInfo1 span").text("Finished in " + place + " place and clocked in at " + (raceTime1/ 1000).toFixed(2) + " seconds");

            benzemaWinner();
        });

        $("#raceCar").animate({
            left:raceTrackWidth2

        },raceTime2,function(){

            checkIfComplete();

            $("#raceInfo2 span").text("Finished in " + place + " place and clocked in at " + (raceTime2/ 1000).toFixed(2) + " seconds");

            giroudWinner();
        });

        
        })

    $("#reset").click(function(){
            $("#goKart").css({
                left: "80px",
            });

            $("#raceCar").css({
                left: "-35px",
            });

            $(".raceInfo span").text("")

    });

    $("#raceAgain").click(function(){
        
        $("#container2").hide();

        $("#goKart").css({
            left: "80px",
        });

        $("#raceCar").css({
            left: "-35px",
        });

        $(".raceInfo span").text("");

                    
    });
});