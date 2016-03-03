import { Dispatcher } from 'flux';

var dispatcher = new Dispatcher();


dispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

export default dispatcher;