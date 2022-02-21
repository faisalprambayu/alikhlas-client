<template>
  <div>
  <Breadcrumbs v-bind:binding="binding"/>

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Contact</h2>
          <p>Kontak Kami</p>
        </header>

        <div class="row gy-4">

          <div class="col-lg-6">

            <div class="row gy-4">
              <div class="col-md-12">
                <div class="info-box" style="text-align: center;">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>Jl. Kenari<br>Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box" style="text-align: center;">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>0813-8205-3988</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box" style="text-align: center;">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>dkm@masjid-alikhlas.com</p>
                </div>
              </div>
              <!-- <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday<br>9:00AM - 05:00PM</p>
                </div>
              </div> -->
            </div>

          </div>

          <div class="col-lg-6">
            <form action="forms/contact.php" method="post" class="php-email-form">
              <div class="row gy-4">

                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Your Name" required>
                </div>

                <div class="col-md-6 ">
                  <input type="email" class="form-control" name="email" placeholder="Your Email" required>
                </div>

                <div class="col-md-12">
                  <input type="text" class="form-control" name="subject" placeholder="Subject" required>
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>

          </div>

        </div>
        
        <div class="row gy-4" style="padding-top:50px;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.647108973739!2d106.70388921436147!3d-6.310006063506594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e54938574a1d%3A0xe969da188e8ae331!2sMasjid%20Al%20Ikhlas!5e0!3m2!1sid!2sid!4v1637920264906!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

      </div>

    </section><!-- End Contact Section -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<script>
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default{
  name : 'Contact',
  components: {
    Breadcrumbs,
  },
  data(){
    return{
      binding: {
        name: "Kontak",
        secondName:null
      }
    }
  },
  mounted(){
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'js/main.js')
    document.head.appendChild(recaptchaScript);

    // this.scrollToTop();
    
  },
  // methods: { 
  //   scrollToTop() {
  //     // window.scrollTo(0,0);
  //     window.history.scrollRestoration = 'manual';
  //   }
  // }
}
</script>

