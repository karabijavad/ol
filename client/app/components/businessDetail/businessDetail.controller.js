class businessDetailController {
  constructor($stateParams, $http, API_URL) {
    this.loadingBusiness = true;
    console.log(API_URL + $stateParams.id);
    $http.get(API_URL + $stateParams.id)
    .then((response) => {
      this.business = response.data
    }).finally(() => {
      this.loadingBusiness = false;
    })
  }
}

export default businessDetailController;
