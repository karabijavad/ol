import angular from 'angular';

let ownLocalService = angular.module('ownLocalModule', [])

.constant('API_URL', 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/')

.service('ownLocalService', function(API_URL, $http) {
    return {
        fetchBusinesses: function(page, perPage) {
            return $http.get(API_URL, {params: {
                page: page,
                per_page: perPage,
            }});
        }
    }
})

.name;

export default ownLocalService;
