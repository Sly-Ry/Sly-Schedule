var hour = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

var containerEl = document.querySelector(".container");


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
        
        var hourSlot = document.createElement("p");
        hourSlot.classList = "hour";
        hourSlot.id = "hourSlot";
        if (hour[i] > 8 && hour[i] < 12) {
            hourSlot.textContent = hour[i] + " AM";
        }
        else {
            hourSlot.textContent = hour[i] + " PM";
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

        

    }
    
};



var today = new Date();
var date = (today.getMonth()+1) +'-'+ today.getDate() + '-' + today.getFullYear();

$("#currentDay").append(date);

var timeDay = function() {
    console.log(today);
}

timeDay();
fillContainer(); 