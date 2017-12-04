window.fbAsyncInit = function() {
    FB.init({
      appId      : '1666778430039097',
      status     : true,
      xfbml      : true,
      version: 'v2.11'
    });
    FB.Event.subscribe('edge.create',
       function(response) {
        //  alert('You liked the URL: ' + response);
        document.location.href = 'https://www.google.com.do'
       }
    );

    FB.Event.subscribe('edge.remove',
      function(response) {
         alert('You UNliked the URL: ' + response);
      }
    );
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.11&appId=1666778430039097';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'))
