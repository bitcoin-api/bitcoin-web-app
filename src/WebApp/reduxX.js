import ReduxX, { v } from 'react-state-management';
import { mainStyles, mainStyleToMainStyleObject } from './constants';

const initialMainStyleObject = mainStyleToMainStyleObject[ mainStyles.dark ];
 
 
export const {
 
    setUpReduxX,
    setState,
    getState,
 
    /* Optional Exports: */
    resetReduxX,
    // getGlobalUseState,
    // oldeFashionedStateManagement
 
} = ReduxX({
 
    initialState: {

        bitcoinApi: v( null ),

        mainStyleObject: v( initialMainStyleObject ),

        auth: {
 
            tokenInfo: v( null ),
        },

        actionBox: {

            mode: v( null ),
        },

        viewAddressZone: {

            addressData: v( null ),
        },

        withdrawZone: {

            amount: v( 0 ),
            address: v( '' ),
        },

        messageBox: {

            theMessage: v( '' ),
        },
    }
});