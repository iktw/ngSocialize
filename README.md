# ngSocialize

**Demo:** http://jsfiddle.net/iktw/0uuxzjc4/3/

Install
-
* bower install ng-socialize
* Add 'ngSocialize' to your angular module, e.g. ```angular.module('myApp', ['ngSocialize']);```

Usage
-

* Create YouTube Data API Key (https://developers.google.com/youtube/v3/getting-started)
* Add the following to your angular config:
```
angular.module('myApp')
  .config([function (ngSocializeProvider) {
      ngSocializeProvider.setYouTubeAPIKey('myAwsomeYouTubeAPIKey');
  }]);
```
* Add attribute *socialize* to your text:
```
  <div socialize>
    Look at my awesome video: http://youtube.com/?watch=12345
  </div>
```

Supports (more to come)
-
* YouTube
