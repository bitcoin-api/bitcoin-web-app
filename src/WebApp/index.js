import { createElement as e, useState } from 'react';
// import getAppElements from './getAppElements';
// import { colours } from './constants';
import { getState, setUpReduxX } from './reduxX';

const getStyles = () => {
    
    const mainStyleObject = getState( 'mainStyleObject' );

    return {

        outerContainer: {
            backgroundColor: mainStyleObject.backgroundColor,
            width: '100%',
            height: '100%',

            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    };
};


export default () => {

    setUpReduxX( useState );

    const styles = getStyles();

    return e(
        'div',
        {
            style: styles.outerContainer,
        },
        // ...getAppElements()
    );
};
