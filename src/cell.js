import React from 'react';

export default class Cell extends React.Component {
    render() {
        const {cell, onClick, onRightClick} = this.props;
        let className = 'cell' +
            (cell.revealed ? ' revealed' : '') +
            (cell.mine ? ' mine' : '') +
            (cell.flagged ? ' flagged' : '');
        return (
            <div onClick={onClick}
                 onContextMenu={onRightClick}
                 className={className}>
                {this.getValue()}
            </div>
        );
    }

    getValue() {
        const {cell} = this.props;

        if (!cell.revealed) {
            return cell.flagged ? "🚩" : null;
        }
        if (cell.mine) {
            return "💣";
        }
        if (!cell.value) {
            return null;
        }
        return cell.value;
    }
}
