import Ember from 'ember';

export function div(params/*, hash*/) {
  return params.reduce((a, b) => a / b);
}

export default Ember.Helper.helper(div);
