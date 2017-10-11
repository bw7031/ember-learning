import Ember from 'ember';
import Table from 'ember-light-table';

const {
  Mixin,
  inject,
  isEmpty,
  set,
  get
} = Ember;

export default Mixin.create({
  store: inject.service(),

  page: 0,
  limit: 10,
  dir: 'asc',
  sort: 'HT_OverUnder',

  isLoading: false,
  canLoadMore: true,

  model: 'stats',
  columns: null,
  table: null,

  init() {
    this._super(...arguments);

    let table = new Table(get(this,'columns'), get(this,'model'), { enableSync: true });
    let sortColumn = table.get('allColumns').findBy('valuePath', get(this,'sort'));

    // Setup initial sort column
    if (sortColumn) {
      sortColumn.set('sorted', true);
    }

    set(this,'table',table);
  },

  fetchRecords() {
    console.log("fetch records: " );
    set(this,'isLoading', true);
    get(this,"store").query('posts', {per_page: get(this,"limit"), page: get(this,"page")}).then(records => {
      var model = get(this,'model');
      records.forEach(function(record){
        model.addObject(record._internalModel);
      });
      set(this,'isLoading', false);
      set(this,'canLoadMore', !isEmpty(records));
    });
  },

  actions: {
    onScrolledToBottom() {
      if (get(this,'canLoadMore')) {
        this.incrementProperty('page');
        this.fetchRecords();
      }
    },

    onColumnClick(column) {
      if (column.sorted) {
        this.setProperties({
          dir: column.ascending ? 'asc' : 'desc',
          sort: column.get('valuePath'),
          canLoadMore: true,
          page: 0
        });
        get(this,'model').clear();
      }
    }
  }
});