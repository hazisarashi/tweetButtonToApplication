//---------------------------
// Option
//---------------------------

console.log( 'start' );

// Global PageにOption情報を要求
//safari.self.tab.dispatchMessage('options',location.href);

// 要求を受けとる
/*
safari.self.addEventListener('message',function(evt){
	
	// option に関するデータが返ってきた時
	if( evt.name == 'options' ){
		var data = evt.message;
		main( data ); // Tweetリンクの張り替え
	}
	
},false);
*/

//---------------------------
// Main
//---------------------------

// Tweet文を精製
var url = {};
if (location.search.length > 1) {
	var list = location.search.substr(1).split("&");
	for (i in list) {
		var data = list[i].split("=");
		if ( data[1].match( /^http%3A%2F%2F/ ) ){
			data[1] = decodeURIComponent( data[1] );
		}else{
			data[1] = decodeURI( data[1] );
		}
		
		url[ decodeURI( data[0] ) ] = data[1];
	}
}

safari.self.tab.dispatchMessage('tweet', url );
console.log( url );

window.close();