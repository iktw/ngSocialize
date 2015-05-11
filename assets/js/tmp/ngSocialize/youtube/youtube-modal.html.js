angular.module('ngSocialize').run(['$templateCache', function($templateCache) {
    $templateCache.put('ngSocialize/youtube/youtube-modal.html',
        "<div class=\"video-modal-wrapper\">\n    <div class=\"video-modal-inner\">\n        <iframe width=\"420\" height=\"315\" src=\"{{ youTubeSnippet.embedUrl }}\"></iframe>\n    </div>\n</div>");
}]);