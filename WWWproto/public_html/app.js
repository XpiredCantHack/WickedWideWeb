/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

'use strict';

const switcher = document.querySelector('.btn');
if (switcher) {
    switcher.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
        
        const className = document.body.className;
        if(className === "light-theme") {
            this.textContent = "Dark";
        } else {
            this.textContent = "Light";
        }
    
        console.log('current class name: ' + className);
    });
};

var inCall = false;
const callJoiner = document.querySelector('#userJoinLeaveCallBtn');
if (callJoiner) {
    callJoiner.addEventListener('click', function() {
        if (inCall === false) {
            inCall = true;
            document.getElementById('userJoinLeaveCallBtn').innerText="Leave Call";
            console.log('Joined Call!');
        }
        else if (inCall === true) {
            inCall = false;
            document.getElementById('userJoinLeaveCallBtn').innerText="Join Call";
            console.log("Left Call!");
        }
    });
};


