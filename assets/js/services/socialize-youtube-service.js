angular.module('ngSocialize')
    .service('SocializeYouTubeService',
    function (SocializeService, $http, $sce, ngSocialize) {
        return {
            getVideoMeta: function (id) {
                var api_key = ngSocialize.youTubeAPIKey;
                var url = 'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&part=snippet&key=' + api_key;
                return $http.get(url);
            },
            getEmbedUrl: function (id) {
                return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + id + '?autoplay=1');
            },
            getIds: function (urls) {
                var regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.&v=))((\w|-){11})(?:\S)?$/;

                var youtubeIds = [];
                angular.forEach(urls, function (url) {
                    if (url.match(regex)) {
                        youtubeIds.push(RegExp.$1);
                    }
                });

                return SocializeService.clearFromDuplicates(youtubeIds);
            }
        }
    });
