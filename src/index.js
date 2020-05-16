import { createElement as e } from 'react';
import ReactDOM from 'react-dom';
import WebApp from './WebApp';

const styles = {

    body: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
};


const App = () => {

    return e(
        'div',
        {
            style: styles.body,
        },
        e( WebApp ),
    );
};


ReactDOM.render(
    e( App ),
    document.getElementById( 'app' )
);
