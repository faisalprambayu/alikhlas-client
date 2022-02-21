<template>
  <div class="activity">
    <Breadcrumbs v-bind:binding="binding"/>
    <!-- ======= Activity Blog Posts Section ======= -->
    <!-- postingan postingan rapih dari instagram -->
    <section id="activity-blog-posts" class="activity-blog-posts">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Activity</h2>
          <p>Postingan Terbaru dari Kami</p>
        </header>

        <div class="row">

          <div class="col-lg-4">
            <div class="post-box">
              <div class="post-img"><img src="../../assets/img/kegiatan/vaksinasi.jpg" class="img-fluid" alt=""></div>
              <span class="post-date">Jumat, November 5</span>
              <h3 class="post-title">Vaksinasi</h3>
              <a href="/agenda/agendadetail" class="readmore stretched-link mt-auto"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="post-box">
              <div class="post-img"><img src="../../assets/img/kegiatan/vaksinasi.jpg" class="img-fluid" alt=""></div>
              <span class="post-date">Senin, Oktober 25</span>
              <h3 class="post-title">Vaksinasi</h3>
              <a href="/agenda/agendadetail" class="readmore stretched-link mt-auto"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="post-box">
              <div class="post-img"><img src="../../assets/img/kegiatan/vaksinasi.jpg" class="img-fluid" alt=""></div>
              <span class="post-date">Ahad, Oktober 24</span>
              <h3 class="post-title">Vaksinasi</h3>
              <a href="/agenda/agendadetail" class="readmore stretched-link mt-auto"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>

        </div>

      </div>

    </section><!-- End Recent Blog Posts Section -->
  </div>
</template>

<script>
import Breadcrumbs from '../../components/layout/Breadcrumbs';

export default{
  name : 'Activity',
  components: {
    Breadcrumbs,
  },
  data(){
    return{
      binding: {
        name: "Agenda",
        secondName:null
      }
    }
  },
  mounted(){
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '/js/main.js')
    document.head.appendChild(recaptchaScript);
  },
}
</script>

