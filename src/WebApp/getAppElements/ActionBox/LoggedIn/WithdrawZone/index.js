import { createElement as e } from 'react';
import { getState, setState } from '../../../../reduxX';
import { fonts } from '../../../../constants';
import WithdrawBox from './WithdrawBox';


const getStyles = () => {

    const {

        backgroundColor,
        color,

    } = getState( 'mainStyleObject' );
    
    return {
        outerContainer: {
            // backgroundColor: 'indigo',
            height: '100%',
            width: '100%',

            // backgroundColor,

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },

        backButton: {

            width: '100%',
            backgroundColor,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        backButtonText: {

            fontSize: 20,
            width: '100%',
            paddingTop: 13,
            paddingBottom: 13,
            textAlign: 'center',
            color,
            fontFamily: fonts.standard.regular,
        },
    };
};


export default () => {

    // useEffect( componentDidMount, [] );

    // const addressData = getState( 'viewAddressZone', 'addressData' );
    
    const styles = getStyles();

    return e(
        'div',
        {
            style: styles.outerContainer,
        },
        e( WithdrawBox ),
        e(
            'div',
            {
                style: styles.backButton,
                onClick: () => {

                    setState( [ 'actionBox', 'mode' ], null );
                }
            },
            e(
                'div',
                {
                    style: styles.backButtonText,
                },
                'BACK'
            )
        )
    );
};
