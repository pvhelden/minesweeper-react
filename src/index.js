import ReactDOM from 'react-dom';
import './game.scss';
import Game from './game';

const btn = document.getElementById('start');
btn.addEventListener('click', renderGame);

function renderGame() {
    const inputs = getValidatedInputs();
    if (!inputs.some((elem) => {return elem === null;})) {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        ReactDOM.render(
            <Game grid_height={inputs[0]}
                  grid_width={inputs[1]}
                  mines={inputs[2]}/>,
            document.getElementById('root')
        );
    }
}

function getValidatedInputs() {
    return [
        checkRange(document.getElementById('grid-height').value, 2, 20, "Grid Height"),
        checkRange(document.getElementById('grid-width').value, 2, 20, "Grid Width"),
        checkRange(document.getElementById('mines').value, 1, 100, "Mines"),
    ];
}

function checkRange(value, min, max, name) {
    if (isNaN(value) || value < min || value > max) {
        alert(`${name} needs to be a number between ${min} and ${max}.`);
        return null;
    }
    return value;
}
