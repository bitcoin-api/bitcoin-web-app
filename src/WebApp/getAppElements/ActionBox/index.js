import { useEffect, createElement as e } from 'react';
import NotLoggedIn from './NotLoggedIn';
// import LoggedIn from './LoggedIn';
import { getState } from '../../reduxX';
// import componentDidMount from './componentDidMount';
import { colours } from '../../constants';


const styles = {
    outerContainer: {
        // backgroundColor: 'yellow',
        width: '100%',
        backgroundColor: colours.apiRoyalBlue,

        height: '50%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
};


export default () => {

    // useEffect( componentDidMount, [] );

    const tokenInfo = getState( 'auth', 'tokenInfo' );

    // const mainElement = !!tokenInfo ? e(

    //     LoggedIn

    // ) : e(
        
    //     NotLoggedIn
    // );

    const mainElement = e(
        NotLoggedIn
    );
    
    return e(
        'div',
        {
            style: styles.outerContainer,
        },
        mainElement
    );
};
