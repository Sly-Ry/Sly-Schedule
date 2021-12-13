// variable section
var hour = [
    { 
        average: "9",
        convert: 09
    },
    {
        average: "10",
        convert: 10
    },
    {
        average: "11",
        convert: 11
    },
    {
        average: "12",
        convert: 12
    },
    {
        average: "1",
        convert: 13
    },
    {
        average: "2",
        convert: 14
    },
    {
        average: "3",
        convert: 15
    },
    {
        average: "4",
        convert: 16
    },
    { 
        average: "5", 
        convert: 17
    }
];
     
var today = new Date(); 

var date = (today.getMonth()+1) +'-'+ today.getDate() + '-' + today.getFullYear();

var currentTime = today.getHours("HH");
console.log(currentTime);


var containerEl = document.querySelector(".container");

$("#currentDay").append(date);

var fillContainer = function() {
    for(i = 0; i < hour.length; i++) {
        // creating row for contents
        var divRow = document.createElement("div");
        divRow.classList = "row d-flex flex-row";
        divRow.id = "divRow";
        containerEl.appendChild(divRow);
        console.log(divRow);

        // timeblock element
        var timeBlock = document.createElement("div");
        timeBlock.classList = "time-block col-2";
        divRow.appendChild(timeBlock);
        
        var hourSlot = document.createElement("h5");
        hourSlot.classList = "hour";
        hourSlot.id = "hourSlot";
        if (hour[i].average > 8 && hour[i].average < 12) {
            hourSlot.textContent = hour[i].average + " AM";
        }
        else {
            hourSlot.textContent = hour[i].average + " PM";
        }
        timeBlock.appendChild(hourSlot);

        // textarea element
        var textArea = document.createElement("textarea");
        textArea.classList = "textarea description col-9";
        textArea.id = "textarea";
        divRow.appendChild(textArea);

        // save button element
        var btnSlot = document.createElement("p");
        btnSlot.classList = "saveBtn col-1";
        divRow.appendChild(btnSlot);

        var saveBtn = document.createElement("button");
        saveBtn.type = "button";
        saveBtn.classList = "btn";
        saveBtn.innerHTML = "<i class='far fa-save'></i>";
        btnSlot.append(saveBtn);

        if()

    }

    
};

fillContainer();