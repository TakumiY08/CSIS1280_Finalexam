function startClock() {
    
    var x = setInterval(function() {
        var nowDate = new Date();
        var currentStatus = document.getElementById("session").innerHTML;
        if(currentStatus == "")
        {
            var month = nowDate.getMonth();
            var day = nowDate.getDate();
            var year = nowDate.getFullYear();
            var weekDay = nowDate.getDay();

            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            month = months[month];
            const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            weekDay = weekDays[weekDay];

            document.getElementById("date").innerHTML = month + " " + day + ", " + year;
            document.getElementById("day").innerHTML = weekDay;

            var hours = nowDate.getHours();
            var minutes = nowDate.getMinutes();
            var seconds = nowDate.getSeconds();

            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }
        else{
            var month = nowDate.getMonth();
            var day = nowDate.getDate();
            var year = nowDate.getFullYear();
            var weekDay = nowDate.getDay();

            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            month = months[month];
            const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            weekDay = weekDays[weekDay];

            document.getElementById("date").innerHTML = month + " " + day + ", " + year;
            document.getElementById("day").innerHTML = weekDay;

            var hours = nowDate.getHours();
            if(currentStatus == "PM")
            {
                if(hours != 12)
                {
                    hours = hours - 12;
                }
            }
            var minutes = nowDate.getMinutes();
            var seconds = nowDate.getSeconds();

            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }
    }, 1000) 
}

function switchHr() {
    var currentStatus = document.getElementById("session").innerHTML;
    var currentHour = new Date().getHours();
    if(currentStatus == "")
    {
        if(currentHour >= 0 && currentHour < 12)
        {
            document.getElementById("session").innerHTML = "AM";
        }
        else if(currentHour >= 12 && currentHour <= 23)
        {
            if(currentHour != 12)
            {
                currentHour = currentHour - 12;
                document.getElementById("hours").innerHTML = currentHour;
            }
            document.getElementById("session").innerHTML = "PM";
        }
    }
    else {
        if(currentStatus == "PM")
        {
            if(currentHour != 12)
            {
                currentHour = currentHour + 12;
                document.getElementById("hours").innerHTML = currentHour;
            }
        }

        document.getElementById("session").innerHTML = "";
    }
}