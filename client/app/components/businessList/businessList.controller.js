class businessesListController {
  constructor($http, $state, $stateParams, ownLocalService) {
    let ctrl = this;
    this.$http = $http;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.ownLocalService = ownLocalService;

    this.page = Number(this.$stateParams.page) || 1;
    this.perPage = 50;

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
        { name: 'name'},
      ],
      onRegisterApi: function(gridApi) {
        ctrl.fetchBusinesses();
      }
    };
  }

  fetchBusinesses() {
    return this.ownLocalService.fetchBusinesses(this.page, this.perPage)
    .then((response) => {
      this.gridOptions.data = response.data.businesses;
    }).catch((response) => {
      this.errorMessage = response.statusText;
    });
  }

  previousPage() {
    this.page -= 1;
    if (this.page < 1) {
      this.page = 1;
    }

    this.$state.transitionTo(this.$state.current.name, {page: this.page}, { notify: false })
    .then(() => {
      this.fetchBusinesses();
    })
  }

  nextPage() {
    this.page += 1;

    this.$state.transitionTo(this.$state.current.name, {page: this.page}, { notify: false })
    .then(() => {
      this.fetchBusinesses();
    })

  }
}

export default businessesListController;
