import { createElement as e } from 'react';
import {
    colours,
    mainStyles,
    mainStyleToMainStyleObject
} from '../../constants';
import { getState, setState } from '../../reduxX';


const styles = {
    outerContainer: {
        backgroundColor: colours.lightTechBlue,
        // width: '100%',
        height: '100%',

        flex: 0.2,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
};


export default () => {
  
    return e(
        'div',
        {
            style: styles.outerContainer,
            onClick: () => {

                const {

                    mainStyle

                } = getState( 'mainStyleObject' );

                if( mainStyle === mainStyles.light ) {

                    setState(
                        [ 'mainStyleObject' ],
                        mainStyleToMainStyleObject[ mainStyles.dark ]
                    );
                }
                else {

                    setState(
                        [ 'mainStyleObject' ],
                        mainStyleToMainStyleObject[ mainStyles.light ]
                    );
                }
            },
        }
    );
};
