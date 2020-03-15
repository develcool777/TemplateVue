<template>
<div class="wrapper homepage">
  <Header/>
  <Content/>
  <Footer/>
  <!-- <Modal/> -->
</div>
</template>

<script>
import Header from '@/layout/header'
import Content from '@/layout/content'
import Footer from '@/layout/footer'
// import Modal from '@/components/modal'
export default {
  name: 'HomePage',
  components: {
    Header,
    Content,
    Footer
    // Modal
  }

}
</script>

<style lang="scss">
.homepage {
  font-size: rem(80);
}

</style>
