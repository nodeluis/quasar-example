import { defineStore } from 'pinia';

import state from './state'
import * as actions from './actions'
import * as getters from './getters'

export const useAuthStore = defineStore('auth', {
  state,
  getters,
  actions
});
