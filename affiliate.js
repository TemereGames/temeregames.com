function processEmail( affiliateLink ) {
    var http = new XMLHttpRequest();
    var url = "https://6d40edc7.ngrok.io/affiliate-api";
    var data = { "email": document.getElementById( "email" ).value };

    http.open( "POST", url );
    http.setRequestHeader( "Content-Type", "application/json" );
    http.send( JSON.stringify( data ) );

    if ( !!data.email && data.email.includes( "@" ) && data.email.includes( "." ) && data.email.length >= 5 ) {
        window.open( affiliateLink, "_self" );
    } else {
        alert( "Please enter a valid email!" );
    }
}