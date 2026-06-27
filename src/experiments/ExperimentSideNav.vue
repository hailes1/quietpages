<template>
  <div>
    <cv-tag @remove="onRemove" label="Filter House" filter kind="high-contrast" />
  </div>
</template>

<script>
import { CvTag } from '@carbon/vue'

export default {
  name: 'SideNav',
  components: {
    CvTag
  }
}
</script>


<style scope lang="scss">



</style>
