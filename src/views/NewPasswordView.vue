<template lang="html">
  <section class="src-views-new-password-view">
    <src-components-new-password />
  </section>
</template>

<script lang="js">

  import SrcComponentsNewPassword from "@/components/NewPassword";
  export default  {
    name: 'src-views-new-password-view',
    components: {SrcComponentsNewPassword},
    props: [],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style scoped lang="scss">
.src-views-new-password-view {
}
</style>
