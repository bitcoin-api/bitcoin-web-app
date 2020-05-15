import { createElement as e } from 'react';
import ReactDOM from 'react-dom';


const App = () => {

    const name = `React Test Name ${ Date.now() % 600 }`;

    return e(
        'h1',
        {

        },
        `Hello ${ name } World🌎!`
    );
};



ReactDOM.render(
    e( App ),
    document.getElementById( 'app' )
);
