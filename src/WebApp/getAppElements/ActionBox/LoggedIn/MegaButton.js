import { createElement as e } from 'react';
import { getState } from '../../../reduxX';
import { fonts } from '../../../constants';


const getStyles = () => {

    const { 

        backgroundColor,
        color

    } = getState( 'mainStyleObject' );
    
    return {
        outerContainer: {
            backgroundColor,
            flex: 0.2,
            width: '100%',

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        text: {

            width: '100%',
            textAlign: 'left',
            fontFamily: fonts.standard.regular,
            fontSize: 20,
            marginLeft: 30,
            color,
        },
    };
};


export default ({

    onClick,
    buttonText,

}) => {

    // const tokenInfo = getState( 'auth', 'tokenInfo' );
    const styles = getStyles();

    return e(
        // View,
        'div',
        {
            style: styles.outerContainer,
            onClick,
        },
        e(
            'div',
            {
                style: styles.text,
            },
            buttonText
        )
    );
};
