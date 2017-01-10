class businessDetailController {
  constructor($stateParams, $http) {
    this.name = 'businessDetail';

    this.loadingBusiness = true;
    $http.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/' + $stateParams.id)
    .then((response) => {
      this.business = response.data
    }).finally(() => {
      this.loadingBusiness = false;
    })
  }
}

export default businessDetailController;
