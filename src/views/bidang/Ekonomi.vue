<template>
  <div>
    <Breadcrumbs v-bind:binding="binding"/>
    <section class="inner-page">
      <div class="container">
        <p>
          Example inner page template
        </p>
      </div>
    </section>
  </div>
</template>


<script>
import Breadcrumbs from '../../components/layout/Breadcrumbs';

export default{
  name : 'Ekonomi',
  components: {
    Breadcrumbs,
  },
  data(){
    return{
      binding: {
      name: "Ekonomi",
      secondName:null
      }
    }
  },
  mounted(){
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'js/main.js')
    document.head.appendChild(recaptchaScript);
    
  },
}
</script>

