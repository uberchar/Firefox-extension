/*
* TODO:
* jQuery ajax calls instead of httpGet to prevent scope problems
* Use a timer set at 3 seconds to prevent bans
* Use javascript zip libraries to save all images to one file
*
*/

self.on("click", function () { 
	var url = window.content.location.href;
	var links = [];
	var imgResponse;
	var imgLink = [];
	var urlResponse = httpGet(url);
	$(urlResponse).ready(function(){
		$('a').each(function(){
			if (this.href.indexOf("http://bato.to/read/_/") !== -1){
				console.log(this.href);
				links.push(this.href);
			}
		});
	});

	//for (i = 0; i < links.length; i++){
		//setTimeout(function(){
		//}, 2000);
	//}
	imgResponse = httpGet(links[0]);
		$(this.imgResponse).ready(function(){
			$('a').each(function(){
				console.log(this.getAttribute("href"));
				if (this.getAttribute("href").indexOf("http://img.bato.to/comics") !== -1){
					imgLink.push(this.getAttribute("href"));
				}
			});
		});
	self.postMessage(imgResponse);
});

function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}