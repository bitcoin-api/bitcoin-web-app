import { createElement as e } from 'react';
// import { setState } from '../../../../../reduxX';
import { browser } from '../../../../utils';
import MegaButton from '../MegaButton';


export default () => {

    return e(
        
        MegaButton,

        {
            onClick: async () => {

                try {

                    const token = localStorage.getItem( 'token' );

                    await browser.copy({ message: token });
                    
                    window.open(
                        'https://api-bitcoin.io/token-activator',
                        '_blank'
                    );
                }
                catch( err ) {

                    console.log( 'error in api call:', err );
                }
            },
            buttonText: 'Copy Token and Go to Token-Activator',
        }
    );
};
