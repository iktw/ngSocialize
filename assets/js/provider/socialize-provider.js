angular.module('ngSocialize')
    .provider('ngSocialize',
    function () {
        var APIKeys = {
            youTube: ''
        };

        return {
            setYouTubeAPIKey: function (value) {
                APIKeys.youTube = value;
            },
            $get: function () {
                return {
                    youTubeAPIKey: APIKeys.youTube
                }
            }
        }
    });