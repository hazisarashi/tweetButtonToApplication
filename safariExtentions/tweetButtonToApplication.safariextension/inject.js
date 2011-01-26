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
		url[ decodeURIComponent( data[0] ) ] = decodeURIComponent( data[1] );
	}
}

safari.self.tab.dispatchMessage('tweet', url );
console.log( url );

window.close();