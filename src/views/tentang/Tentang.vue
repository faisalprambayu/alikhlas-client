<template>
  <div>
    <Breadcrumbs v-bind:binding="binding"/>
    <!-- ======= Services Section ======= -->
    <section id="services" class="services">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Tentang Masjid Al-Ikhlas</h2>
        </header>

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6">
            <div class="service-box blue">
              <i class="bi-back icon"></i>
              <h3>Sejarah</h3>
              <p>

              </p>
              <a href="/tentang/sejarah" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" >
            <div class="service-box orange">
              <i class="bi-diagram-3 icon"></i>
              <h3>Struktur</h3>
              <p>

              </p>
              <a href="/tentang/struktur" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" >
            <div class="service-box green">
              <i class="bi-person icon"></i>
              <h3>Pengurus Pembina</h3>
              <p>

              </p>
              <a href="/bidang/pengurus" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

        </div>

      </div>

    </section><!-- End Services Section -->
  </div>
</template>

<script>
import Breadcrumbs from '../../components/layout/Breadcrumbs';

export default{
  name : 'Tentang',
  components: {
    Breadcrumbs,
  },
  data(){
    return{
      binding: {
      name: "Tentang",
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


