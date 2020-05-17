import { createElement as e } from 'react';
import { setState } from '../../../../reduxX';
import { actionBoxModes } from '../../../../constants';
import MegaButton from '../MegaButton';


export default () => {

    return e(
        MegaButton,
        {
            onClick: () => {

                setState(

                    [ 'actionBox', 'mode' ],
                    actionBoxModes.withdraw
                );
            },
            buttonText: 'Withdraw Bitcoin',
        }
    );
};
