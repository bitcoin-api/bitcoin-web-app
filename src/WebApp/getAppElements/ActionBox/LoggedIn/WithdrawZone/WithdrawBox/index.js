import { createElement as e } from 'react';
import { getState } from '../../../../../reduxX';
// import { fonts } from '../../../../../../constants';
import AmountInput from './AmountInput';
import AddressInput from './AddressInput';
import WithdrawButton from './WithdrawButton';
// import componentDidMount from './componentDidMount';


const getStyles = () => {

    const {

        backgroundColor,
        // color,
        // alternateBackgroundColor,
        // alternateColor,

    } = getState( 'mainStyleObject' );
    
    return {
        outerContainer: {
            // backgroundColor: 'indigo',
            backgroundColor,

            width: '90%',
            flex: 0.7,

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
    };
};


export default () => {

    const styles = getStyles();

    return e(
        'div',
        {
            style: styles.outerContainer,
            // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            // onChangeText: text => {
                
            //     onChangeText(text)
            // },
            // value: value,
        },
        e( AmountInput ),
        e( AddressInput ),
        e( WithdrawButton )
    );
};
