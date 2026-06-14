import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from '../experiments/Home.vue'
import ChartingComponent from '../experiments/ExperimentCharting.vue'
import ExperimentToneComponent from '../experiments/ExperimentTone.vue'
import ExperimentScrollComponent from '../experiments/ExperimentScroll.vue'
// import ExperimentShadowsComponent from '../experiments/ExperimentShadows.vue'
import ExperimentColorsComponent from '../experiments/ExperimentColors.vue'
import ExperimentingTransitionsComponent from '../experiments/ExperimentingTransitions.vue'
import ExperimentTimelineComponent from '../experiments/ExperimentTimeline.vue'
import TheLabComponent from '../experiments/TheLab.vue'

const routes = [
  {
    path: '/',
    component: HomeComponent,
    props: true, // Pass all route-related properties as props
  },
  {
    path: '/the-lab',
    component: TheLabComponent,
    props: true,
  },
  {
    path: '/charting',
    component: ChartingComponent,
    props: true, // Pass all route-related properties as props
  },
  {
    path: '/experiment-tone',
    component: ExperimentToneComponent,
    props: true,
  },
  {
    path: '/experiment-scroll',
    component: ExperimentScrollComponent,
    props: true,
  },
  // {
  //   path: '/experiment-shadows',
  //   component: ExperimentShadowsComponent,
  //   props: true,
  // },
  {
    path: '/color-palette',
    component: ExperimentColorsComponent,
    props: true,
  },
  {
    path: '/state-transitions',
    alias: ['/experiment-transitions', '/experimenting-transitions'],
    component: ExperimentingTransitionsComponent,
    props: true,
  },
  {
    path: '/timeline',
    alias: ['/about'],
    component: ExperimentTimelineComponent,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
