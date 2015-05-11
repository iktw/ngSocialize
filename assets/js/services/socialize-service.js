angular.module('ngSocialize')
    .service('SocializeService', function () {
        return {
            getSocialApplications: function () {
                return [
                    'youTube'
                ];
            },
            getSocializeTemplates: function () {
                return {
                    'youTube': 'ngSocialize/youtube/youtube-list.html'
                }
            },
            clearFromDuplicates: function (list) {
                return list.filter(function (item, pos) {
                    return list.indexOf(item) == pos;
                })
            },
            getUrls: function (text) {
                var regex = /(\b(https?|ftp|file):\/\/[-A-Z0-9&@#\/%?=~_|!:,.;]*[-A-Z0-9&@#\/%=~_|])/ig;
                var urls = [];

                text.replace(regex, function (url) {
                    urls.push(url);
                });

                return urls;
            }
        }
    });
