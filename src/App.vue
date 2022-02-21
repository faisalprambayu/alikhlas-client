<template>
  <div id="app">
    <Header/>
    <!-- <Breadcrumbs/> -->
    <!-- <AddTodo/> -->
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layout/Header';

import Footer from './components/layout/Footer';
// import AddTodo from './components/AddTodo';

export default{
  name : 'app',
  components: {
    Header,
    Footer,
    // AddTodo,
  }
}
</script>

<style>
  .footer .footer-top {
    background: white url(assets/img/footer-bg.png) no-repeat right top;
    background-size: contain;
    border-top: 1px solid #e1ecff;
    border-bottom: 1px solid #e1ecff;
    padding: 60px 0 30px 0;
  }
</style>
