import { /*getState,*/ setState } from '../../../reduxX';
import getIsLoggedInData from './getIsLoggedInData';


export default () => {

    new Promise( async resolve => {

        try {

            const {

                tokenInfo,
                // bitcoinApi

            } = await getIsLoggedInData();

            setState(
                {
                    keys: [ 'auth', 'tokenInfo' ],
                    value: tokenInfo,
                }
            );
        }
        catch( err ) {

            console.log( 'error in ActionBox start up function:', err );
            
            // setState( [ 'auth', 'isLoggedIn' ], false );
            setState(
                {
                    keys: [ 'auth', 'tokenInfo' ],
                    value: null,
                },
                {
                    keys: 'bitcoinApi',
                    value: null,
                },
            );
        }

        resolve();
    });
};