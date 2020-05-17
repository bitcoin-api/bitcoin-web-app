import { useEffect, createElement as e } from 'react';
import { getState, setState } from '../../../../reduxX';
import { fonts } from '../../../../constants';
import componentDidMount from './componentDidMount';


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

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },

        qrCode: {

            width: 300,
            height: 300,
            backgroundColor,
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

const getQrCodeUrl = ({ address }) => (

    `https://api-bitcoin.s3.amazonaws.com/qr_codes/${ address }.jpg`
);


export default () => {

    useEffect( componentDidMount, [] );

    const addressData = getState( 'viewAddressZone', 'addressData' );
    
    const styles = getStyles();

    return e(
        'div',
        {
            style: styles.outerContainer,
        },
        !!addressData ? e(

            'img',
            {
                width: styles.qrCode.width,
                height: styles.qrCode.height,
                src: getQrCodeUrl({

                    address: addressData.address,
                }),
                // src: `https://api-abi`
                style: styles.qrCode,
            }

        ) : e(

            'div',
            {
                style: styles.qrCode,
            }
        ),
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
