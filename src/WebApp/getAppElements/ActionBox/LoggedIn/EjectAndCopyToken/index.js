import { createElement as e } from 'react';
import { resetReduxX } from '../../../../reduxX';
import MegaButton from '../MegaButton';
import { browser } from '../../../../utils';


export default () => {

    return e(
        MegaButton,
        {
            buttonText: 'Copy and Eject Token',
            onClick: async () => {

                const token = localStorage.getItem( 'token' );

                await browser.copy({ message: token });

                resetReduxX({
                    listOfKeysToInclude: [
                        [ 'actionBox', 'mode' ],
                        [ 'auth', 'tokenInfo' ]
                    ]
                });
            }
        }
    );
};
