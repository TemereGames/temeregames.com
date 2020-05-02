const HOST = "https://f8819921.ngrok.io"

function processEmail( affiliateLink ) {
    var http = new XMLHttpRequest();
    var url = HOST + "affiliate-api";
    var data = { "email": document.getElementById( "email" ).value };

    if ( !!data.email && data.email.includes( "@" ) && data.email.includes( "." ) && data.email.length >= 5 ) {
        http.open( "POST", url );
        http.setRequestHeader( "Content-Type", "application/json" );
        http.send( JSON.stringify( data ) );

        window.open( affiliateLink, "_self" );
    } else {
        alert( "Please enter a valid email!" );
    }
}

function unsubscribe() {
    var http = new XMLHttpRequest();
    var url = HOST + "unsubscribeme";
    var data = { "email": document.getElementById( "email" ).value };

    http.open( "POST", url );
    http.setRequestHeader( "Content-Type", "application/json" );
    http.send( JSON.stringify( data ) );
}