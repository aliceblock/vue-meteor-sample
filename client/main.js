import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker';

Vue.use(VueMeteorTracker);

import App from '../imports/App.vue'

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('app')
})