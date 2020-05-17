import { createElement as e } from 'react';
import createNewToken from './createNewToken';
import getPastedTokenData from './getPastedTokenData';
import { getState, setState } from '../../../reduxX';
import { fonts } from '../../../constants';
import { messageBoxCommon, browser } from '../../../utils';


const getStyles = () => {

    const {
        
        backgroundColor,
        color,

    } = getState( 'mainStyleObject' );
    
    return {
        
        outerContainer: {
            // backgroundColor: 'red',
            width: '100%',
            height: '100%',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },

        button: {

            width: '85%',
            flex: 0.25,
            backgroundColor,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },

        buttonText: {

            fontSize: 20,
            textAlign: 'center',
            color,
            fontFamily: fonts.standard.regular
        }
    };
};


const updateTokenInfoAppData = async ({

    getTokenDataFunction

}) => {

    try {
        
        const {

            token,
            tokenInfo,
            
        } = await getTokenDataFunction();

        setState( [ 'auth', 'tokenInfo' ], tokenInfo );
        // await AsyncStorage.setItem( 'token', token );
        localStorage.setItem( 'token', token );
    }
    catch( err ) {

        messageBoxCommon.setMessage({

            message: err.message
        });

        console.log( 'error in updateTokenInfoAppData:', err );

        setState( [ 'auth', 'tokenInfo' ], null );
        localStorage.removeItem( 'token' );
    }
};


export default () => {

    const styles = getStyles();

    return e(
        'div',
        {
            style: styles.outerContainer,
        },
        e(
            'div',
            {
                // title: 'Create Token',
                style: styles.button,
                onClick: async () => {

                    await updateTokenInfoAppData({

                        getTokenDataFunction: createNewToken,
                    });
                }
            },
            e(
                'div',
                {
                    style: styles.buttonText,
                },
                'Create New Token'
            )
        ),
        e(
            'div',
            {
                style: styles.button,
                onClick: async () => {

                    try {

                        const token = localStorage.getItem( 'token' );

                        browser.copy({ message: token });
                    }
                    catch( err ) {

                        await messageBoxCommon.setMessage({

                            message: err.message
                        });
                    }
                }
            },
            e(
                'div',
                {
                    style: styles.buttonText,
                },
                'Copy Token in Storage'
            )
        ),
        e(
            'div',
            {
                // title: 'Paste Token',
                style: styles.button,
                // color: '#f194ff',
                onClick: async () => {

                    await updateTokenInfoAppData({

                        getTokenDataFunction: getPastedTokenData,
                    });
                }
            },
            e(
                'div',
                {
                    style: styles.buttonText,
                },
                'Paste Token from Clipboard'
            )
        )
    );
};
