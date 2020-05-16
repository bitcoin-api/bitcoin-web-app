import { createElement as e } from 'react';
import {
    
    colours,
    // mainStyles,
    // mainStyleToMainStyleObject

} from '../../constants';
// import { getState, setState } from '../../../reduxX';
import ChangeMainStyleButton from './ChangeMainStyleButton';
import TheMessageContainer from './TheMessageContainer';


const styles = {
    outerContainer: {
        backgroundColor: colours.apiRoyalBlue,
        // backgroundColor: 'pink',
        width: '100%',

        // flex: 0.1,
        height: '10%',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
};


export default () => {
  
    return e(
        'div',
        {
            style: styles.outerContainer,
        },
        e( ChangeMainStyleButton ),
        e( TheMessageContainer )
    );
};
