"use strict";

let string_command = prompt("Write a command. start, stop, pause, resume");

function commandintrepeter(string_command) {
    switch (string_command) {
        case "start":
            alert("Starting...");
            break;
        case "stop":
            alert("Stopping...");
            break;
        case "pause":
            alert("Pausing...");
            break;
        case "resume":
            alert("Resuming...");
            break;
            default:
                alert("This command does not exist.");
    }
    return string_command;
}


commandintrepeter(string_command);