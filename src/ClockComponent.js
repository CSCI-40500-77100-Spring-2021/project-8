import React from 'react';
import ReactDOM from 'react-dom'

const ClockComponent = function () {
    return (
        <div id="root">
            <Clock date={new Date()} />
        </div>
    );
};



function Clock(props) {
    return (
        <div>

            <h2> You logged in at {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

// function tick() {
//     ReactDOM.render(
//         ,
//         document.getElementById('root')
//     );
// }

setInterval(ClockComponent, 1000);
export default ClockComponent;