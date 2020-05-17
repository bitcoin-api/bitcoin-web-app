import { tokens, browser } from '../../../utils';


export default async () => {

    const token = await browser.paste();

    const {

        tokenInfo

    } = await tokens.initializeBitcoinApi({

        token
    });
    
    return {
        
        token,
        tokenInfo,
    };
};
