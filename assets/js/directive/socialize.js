angular.module('ngSocialize')
    .directive('socialize',
    function (SocializeService, SocializeYouTubeService, $compile, $timeout, $templateCache) {

        var socializeApps = SocializeService.getSocialApplications();
        var socializeTemplates = SocializeService.getSocializeTemplates();

        var getSocializeItems = function (urls) {
            var items = {};
            items.youTube = SocializeYouTubeService.getIds(urls);
            return items;
        };

        var generateSocializeTemplate = function (mainTemplate) {
            angular.forEach(socializeApps, function (app) {
                var appTemplateUrl = socializeTemplates[app];
                var appTemplate = $templateCache.get(appTemplateUrl);
                mainTemplate.append(appTemplate);
            })
        };

        var linker = function ($scope, $el) {
            $timeout(function () {
                var innerText = $el[0].innerText;
                var urls = SocializeService.getUrls(innerText);
                var mainTemplate = angular.element('<div>');
                generateSocializeTemplate(mainTemplate);

                $scope.socializeItems = getSocializeItems(urls);

                $compile(mainTemplate)($scope);
                $el.append(mainTemplate);
            }, 0);
        };

        return {
            restrict: 'A',
            link: linker,
            scope: {}
        }
    });
