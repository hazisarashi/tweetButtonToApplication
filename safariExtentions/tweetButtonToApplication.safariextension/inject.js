//---------------------------
// Option
//---------------------------

/* console.log( 'start' ); */

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

// URLからテキスト情報を抜き出して、tweetに送る
$('span.tb a').click(function(){
	var url = {};
	if ( location.hash.length > 1 ) {
		var list = location.hash.substr(1).split("&");
		for ( i in list ) {
			var data = list[i].split("=");
			url[ decodeURIComponent( data[0] ) ] = decodeURIComponent( data[1] );
		}
	}
	
	safari.self.tab.dispatchMessage( 'tweetButton', url );
	console.log( "tweet url", url );
	
	return false;
	
});

$('span.tb a').get(0).onclick=null;