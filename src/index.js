import ReactDOM from 'react-dom';
import './index.scss';
import Game from './game';

ReactDOM.render(
    <Game grid_height={8}
          grid_width={8}
          mines={10}/>,
    document.getElementById('root')
);
