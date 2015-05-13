angular.module('ngSocialize').run(['$templateCache', function($templateCache) {
    $templateCache.put('ngSocialize/youtube/youtube-modal.html',
        "<div class=\"video-modal-wrapper\" ng-click=\"closeVideoModal();\">\n    <div class=\"video-modal-inner\" ng-click=\"$event.preventDefault();\">\n        <div class=\"video-modal-close\">x</div>\n        <iframe id=\"ytplayer\" type=\"text/html\" ng-src=\"{{ youTubeSnippet.embedUrl }}\" frameborder=\"0\"/>\n    </div>\n</div>");
}]);