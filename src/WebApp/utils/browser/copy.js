export default ({

    message

}) => {

    const inputElement = document.createElement( 'input' );
    inputElement.type = 'text';
    inputElement.style.display = 'none';
    inputElement.id = 'copyTextInput';
    const appElement = document.getElementById( 'app' );
    appElement.appendChild( inputElement );

    const gottenInputElement = document.getElementById( 'copyTextInput' );

    gottenInputElement.value = message;
    gottenInputElement.select();
    gottenInputElement.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand( 'copy' );
    alert( gottenInputElement.value );
};