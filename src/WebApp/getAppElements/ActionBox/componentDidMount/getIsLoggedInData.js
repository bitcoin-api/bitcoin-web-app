import { tokens } from '../../../utils';


export default async () => {

    const token = await localStorage.getItem( 'token' );

    const {

        tokenInfo,
        // bitcoinApi

    } = await tokens.initializeBitcoinApi({

        token,
    });

    if( !tokenInfo ) {

        return {

            tokenInfo: null,
            // bitcoinApi: null,
        };
    }

    return {

        tokenInfo,
        // bitcoinApi
    };
};
