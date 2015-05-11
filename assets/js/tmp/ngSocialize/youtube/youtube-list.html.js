angular.module('ngSocialize').run(['$templateCache', function($templateCache) {
    $templateCache.put('ngSocialize/youtube/youtube-list.html',
        "<section class=\"ng-socialize-list-video\" ng-if=\"socializeItems.youTube.length\">\n    <div class=\"ng-socialize-list-item\" ng-show=\"youTubeSnippet\" ng-repeat=\"youTubeId in socializeItems.youTube\" ng-controller=\"SocializeYouTubeItemCtrl\">\n        <div class=\"ng-socialize-list-item-thumbnail\">\n            <div class=\"play_border\" ng-click=\"showVideoModal()\">\n                <div class=\"play_button\"></div>\n            </div>\n            <img ng-src=\"{{ youTubeSnippet.thumbnails.default.url }}\">\n        </div>\n        <div class=\"ng-socialize-list-item-content\">\n            <h2 class=\"ng-socialize-list-item-content-title\">{{ youTubeSnippet.title }}</h2>\n            <p class=\"ng-socialize-list-item-content-description\" ng-if=\"youTubeSnippet.description\">\n                {{ youTubeSnippet.description | characters:80 }}\n            </p>\n        </div>\n        <small class=\"ng-socialize-list-item-domain\">youtube.com</small>\n        <ng-include src=\"'ngSocialize/youtube/youtube-modal.html'\" ng-if=\"youTubeSnippet.isActive\"></ng-include>\n    </div>\n</section>");
}]);