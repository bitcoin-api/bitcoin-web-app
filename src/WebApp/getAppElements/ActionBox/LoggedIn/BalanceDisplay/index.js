import { createElement as e } from 'react';
import { getState } from '../../../../reduxX';
import { fonts } from '../../../../constants';

const getStyles = () => {

    const {
        
        backgroundColor,
        color,

    } = getState( 'mainStyleObject' );
    
    return {
        outerContainer: {
            backgroundColor,
            flex: 0.2,
            width: '100%',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        text: {

            width: '100%',
            textAlign: 'left',
            fontSize: 20,
            paddingLeft: 30,
            color,
            fontFamily: fonts.standard.regular,
        },
    };
};

export default () => {

    const tokenInfo = getState( 'auth', 'tokenInfo' );

    const styles = getStyles();

    return e(
        'div',
        {
            style: styles.outerContainer,
        },
        e(
            'div',
            {
                style: styles.text,
            },
            `Balance: ${ tokenInfo.balanceData.amount } BTC`
        )
    );
};
