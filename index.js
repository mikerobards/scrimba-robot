let robot = document.querySelector('.robot');

//Challenge: Make the robot move when you click it. Don't forget to share you robot on
//Discord! Feel free to play around with the styling before doing so!

//declare a variable
let tbmove = 0;
let lfmove = 0;

function moveRobot(event) {
    //add code here
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case 'ArrowUp':
            tbmove -= 25;
            robot.style.top = tbmove + 'px';
            break;
        case 'ArrowDown':
            tbmove += 25;
            robot.style.top = tbmove + 'px';
            break;
        case 'ArrowLeft':
            lfmove -= 25;
            robot.style.left = lfmove + 'px';
            break;
        case 'ArrowRight':
            lfmove += 25;
            robot.style.left = lfmove + 'px';
            break;
        default:
            return;
    }
}

window.addEventListener('keydown', moveRobot)
