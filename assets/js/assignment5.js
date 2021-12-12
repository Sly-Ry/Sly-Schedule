var hour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

var containerEl = document.querySelector(".container");


var fillContainer = function() {
    for(i = 0; i < hour.length; i++) {
        
        var divRow = document.createElement("div");
        divRow.classList = "row d-flex flex-row";
        divRow.id = "divRow";
        containerEl.appendChild(divRow);
        console.log(divRow);

        var timeBlock = document.createElement("div");
        timeBlock.classList = "time-block  col-1";
        divRow.appendChild(timeBlock);
        
        var hourSlot = document.createElement("p");
        hourSlot.classList = "hour";
        hourSlot.id = "hourSlot";
        hourSlot.textContent = hour[i];
        timeBlock.appendChild(hourSlot);

        var textArea = document.createElement("textarea");
        textArea.classList = "textarea description col-8";
        textArea.id = "textarea";
        divRow.appendChild(textArea);

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

// var timeDay = function() {
//     today.getHours();
//     console.log(today);
// }

// timeDay();
 fillContainer();