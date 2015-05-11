angular.module('ngSocialize')
    .controller('SocializeYouTubeItemCtrl',
    function ($scope, $log, SocializeYouTubeService, $filter) {
        $scope.youTubeSnippet = null;

        $scope.showVideoModal = function () {
            $scope.youTubeSnippet.isActive = true
        };

        SocializeYouTubeService.getVideoMeta($scope.youTubeId)
            .success(function (data, status, headers, config) {
                $scope.youTubeSnippet = data['items'][0]['snippet'];
                $scope.youTubeSnippet.embedUrl = SocializeYouTubeService.getEmbedUrl($scope.youTubeId);
            })
            .error(function (data, status, headers, config) {
                $log.error(config)
            });
    });
