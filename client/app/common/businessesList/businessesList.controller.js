class businessesListController {
  constructor($http) {
    let ctrl = this;
    this.$http = $http;

    this.page = 1;
    this.perPage = 50;
    this.apiUrl = 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/';

    this.gridOptions = {
      useExternalPagination: true,
      enablePaginationControls: false,
      columnDefs: [
        {
          field: 'id',
          cellTemplate: `
            <div class="ui-grid-cell-contents">
              <a ui-sref='businessesDetail({id: grid.getCellValue(row, col)})'>{{grid.getCellValue(row, col)}}</a>
            </div>
          `,
        },
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
      page: this.page,
      per_page: this.perPage,
    }}).then((response) => {
      this.gridOptions.data = response.data.businesses;
    });
  }

  previousPage() {
    this.page -= 1;
    if (this.page < 1) {
      this.page = 1;
    }
    this.fetchBusinesses();
  }

  nextPage() {
    this.page += 1;
    this.fetchBusinesses();
  }
}

export default businessesListController;
