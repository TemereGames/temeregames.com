const HOST = "https://9dedeca73656.ngrok.io/";

function processEmail( affiliateLink, campaign ) {
    var http = new XMLHttpRequest();
    var url = HOST + campaign;
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