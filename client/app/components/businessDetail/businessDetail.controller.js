class businessDetailController {
  constructor($stateParams, $http) {
    $http.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/' + $stateParams.id)
    .then((response) => {
      this.business = response.data
    })
    this.name = 'businessDetail';
  }
}

export default businessDetailController;
