import Vue from "vue";
import VueRouter from "vue-router";

import FormDriver from '@/pages/FormDriver.vue'
import FormBus from '@/pages/FormBus.vue'
import FormBR from '@/pages/FormBR.vue'
import GetDriverInfo from '@/pages/GetDriverInfo.vue'
import GetDriverBR from '@/pages/GetDriverBR.vue'
import GetMotorcadeBR from '@/pages/GetMotorcadeBR.vue'
import ER from '@/pages/ER.vue'
import RelationalModel from '@/pages/RelationalModel.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/formdriver', component: FormDriver },
  { path: '/formbus', component: FormBus },
  { path: '/formBR', component: FormBR },
  { path: '/getdriverinfo', component: GetDriverInfo },
  { path: '/getdriverbr', component: GetDriverBR },
  { path: '/getmotorcadebr', component: GetMotorcadeBR },
  { path: '/er', component: ER },
  { path: '/relational-model', component: RelationalModel }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router;