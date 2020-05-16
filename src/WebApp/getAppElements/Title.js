import { createElement as e } from 'react';
import { fonts } from '../constants';
import { getState } from '../reduxX';


const getStyles = () => {
    
    const {

        color

    } = getState( 'mainStyleObject' );

    return {

        outerContainer: {
    
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            // flex: 0.2,
            height: '20%',
        },
    
        titleText: {
    
            marginTop: 90,
            fontSize: 20,
            color,
            fontFamily: fonts.standard.bold,
        }
    };
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
                style: styles.titleText
            },
            'Testnet App by Bitcoin-Api.io'    
        )
    );
};
