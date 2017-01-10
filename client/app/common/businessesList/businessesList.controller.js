class businessesListController {
  constructor($http) {
    let ctrl = this;
    this.$http = $http;

    this.pageSize = 1;
    this.perPage = 50;
    this.apiUrl = 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/';

    this.gridOptions = {
      columnDefs: [
        { name:'id'},
        { name: 'address'},
        { name: 'address2'},
        { name: 'city'},
        { name: 'country'},
        { name: 'created_at'},
        { name: 'id'},
        { name: 'name'},
        { name: 'phone'},
        { name: 'state'},
        { name: 'uuid'},
        { name: 'website'},
        { name: 'zip'},
      ],
      onRegisterApi: function(gridApi) {
        ctrl.fetchBusinesses();
      }
    };
  }

  fetchBusinesses() {
    return this.$http.get(this.apiUrl, {params: {
      page: this.pageSize,
      per_page: this.perPage,
    }}).then((response) => {
      this.gridOptions.data = response.data.businesses;
    });
  }
}

export default businessesListController;
