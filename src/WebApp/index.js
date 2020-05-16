import { createElement as e } from 'react';
// import getAppElements from './getAppElements';
// import { colours } from './constants';
// import { getState } from '../reduxX';

const getStyles = () => {
    
    // const mainStyleObject = getState( 'mainStyleObject' );
    const mainStyleObject = {
        backgroundColor: 'black',
    };

    return {

        outerContainer: {
            backgroundColor: mainStyleObject.backgroundColor,
            width: '100%',
            // height: '100%',

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

    return e(
        'div',
        {
            style: getStyles().outerContainer,
        }//,
        // ...getAppElements()
    );
};
