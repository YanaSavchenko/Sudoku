import React from 'react';
import {Button} from 'react-bootstrap';

import './StartPage.less';

export default class StartPage extends React.Component {
    render() {
        return (
            <div className='StartPage'>
                <div className='title'>
                    Are you a real sudoku fan ?
                </div>

                <div className='message'>
                    Start great adventure right now !
                </div>

                <Button className='startButton'>
                    I am ready
                </Button>
            </div>
        );
    }
}
