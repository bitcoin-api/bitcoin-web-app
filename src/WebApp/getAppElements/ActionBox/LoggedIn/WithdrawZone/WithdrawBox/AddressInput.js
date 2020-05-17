import { createElement as e } from 'react';
import { getState, setState } from '../../../../../reduxX';
import { fonts } from '../../../../../constants';


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
    
            backgroundColor: alternateBackgroundColor,
            color: alternateColor,
            // flex: 0.7,
            fontSize: 20,
            padding: 15,
            fontFamily: fonts.standard.regular,
        },

        btcTextContainer: {
            
            // backgroundColor: 'pink',
            // flex: 0.3,

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
    };
};


export default () => {

    // useEffect( componentDidMount, [] );

    const address = getState( 'withdrawZone', 'address' );
    
    const styles = getStyles();

    return e(
        'div',
        {
            style: styles.outerContainer,
        },
        e( 
            'input',
            {
                placeholder: 'address',
                onChange: event => {

                    const text = event.target.value;

                    if( text.length > 50 ) {

                        return;
                    }
                
                    setState( [ 'withdrawZone', 'address' ], text.trim() );
                },
                value: address,
                style: styles.theText,
            }
        )
    );
};
