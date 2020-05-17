import { createElement as e } from 'react';
import { getState } from '../../../../../../reduxX';
import { fonts } from '../../../../../../constants';
import withdrawBitcoin from './withdrawBitcoin';
// import componentDidMount from './componentDidMount';

const getStyles = () => {

    const {

        // backgroundColor,
        // color,
        alternateBackgroundColor,
        alternateColor,

    } = getState( 'mainStyleObject' );
    
    return {
        outerContainer: {
            // backgroundColor: 'indigo',
            width: '100%',
            backgroundColor: alternateBackgroundColor,
            
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },

        theText: {
    
            color: alternateColor,
            fontSize: 20,
            padding: 15,
            fontFamily: fonts.standard.regular,
        },
    };
};


export default () => {

    const styles = getStyles();

    return e(
        'div',
        {
            style: styles.outerContainer,
            onClick: withdrawBitcoin,
        },
        e(
            'div',
            {
                style: styles.theText,
            },
            'Withdraw Bitcoin'
        )
    );
};
