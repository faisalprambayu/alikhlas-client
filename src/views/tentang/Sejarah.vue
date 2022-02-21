<template>
  <div>
  <Breadcrumbs v-bind:binding="binding"/>

    <!-- ======= About Section ======= -->
    <section id="about" class="about">

      <div class="container" data-aos="fade-up">
        <div class="row gx-0">

          <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div class="content">
              <h3>Who We Are</h3>
              <h2>Berdirinya Masjid Al-Ikhlas</h2>
              <p>
                Tepat pada hari Minggu, 7 September 2003, peletakan
                batu pertama pembangunan masjid dilakukan oleh
                perwakilan Bupati Tangerang pada saat itu. Disaksikan
                Anggota DRPD Kab. Tangerang, Anugerah, Kepala Desa
                Serua Deden Junaidi.
              </p>
              <!-- <div class="text-center text-lg-start">
                <a href="/about" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Read More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div> -->
            </div>
          </div>

          <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src="https://masjid-alikhlas.com/wp-content/uploads/2021/10/depan_masjid-1.jpg" class="img-fluid" alt="">
          </div>

        </div>
      </div>

    </section><!-- End About Section -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<script>
import Breadcrumbs from '../../components/layout/Breadcrumbs';

export default{
  name : 'Sejarah',
  components: {
    Breadcrumbs,
  },
  data(){
    return{
      binding: {
      name: "Sejarah",
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


