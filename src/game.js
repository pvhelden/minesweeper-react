import React from 'react';
import Grid from './grid';

export default class Game extends React.Component {
    render() {
        const {grid_height, grid_width, mines} = this.props;
        return (
            <Grid grid_height={grid_height}
                  grid_width={grid_width}
                  mines={mines}/>
        );
    }
}
