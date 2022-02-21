<template>
<!-- ======= Header ======= -->
  <header id="header" class="header fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <img src="https://masjid-alikhlas.com/wp-content/uploads/2021/10/logo_web.jpg" alt="">
        <span></span>
      </a>
      
      <nav id="navbar" class="navbar">
        <ul>
          <li><a :class="'nav-link scrollto '+ activatedStatus.Home" href="/">Beranda</a></li>
          <li><a :class="'nav-link scrollto '+ activatedStatus.Activity" href="/agenda">Agenda</a></li>
          <li class="dropdown"><a href="#"><span>Bidang</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/dakwahperibadatan">Dakwah & Peribadatan</a></li>
              <li><a href="/ekonomi">Ekonomi</a></li>
              <li><a href="/fundraising">Fundraising</a></li>
              <li><a href="/pendidikan">Pendidikan</a></li>
              <li><a href="/saranaprasarana">Sarana & Prasarana</a></li>
              <li><a href="/sosialmultimedia">Sosial & Multimedia</a></li>
            </ul>
          </li>
          <!-- <li><a class="nav-link scrollto" href="#">Team</a></li> -->
          <li><a :class="'nav-link scrollto '+ activatedStatus.Blog" href="/blog">Blog</a></li>
          <!-- <li><a class="nav-link scrollto" href="/about">About</a></li> -->
          <li class="dropdown"><a href="#"><span>Tentang</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/sejarah">Sejarah</a></li>
              <li><a href="/struktur">Struktur</a></li>
              <li><a href="/pengurus">Pengurus Pembina</a></li>
            </ul>
          </li>
          <li><a :class="'nav-link scrollto '+ activatedStatus.Contact" href="/kontak">Kontak</a></li>
          <!-- <li><a class="getstarted scrollto" href="#about">Get Started</a></li> -->
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->
</template>

<script>
export default
{
  name: "header",
  data(){
    return {
      activatedStatus:{
        Home:"",
        Activity:"",
        Blog:"",
        Contact:""
      },
    }
  },
   mounted(){

    var router = this.$route.name;
    if (router == "Beranda") {
      this.activatedStatus.Home = "active"
    }
    if (router == "agenda") {
      this.activatedStatus.Activity = "active"
    }
    if (router == "agenda.detail") {
      this.activatedStatus.Activity = "active"
    }
    if (router == "blog") {
      this.activatedStatus.Blog = "active"
    }
    if (router == "blog.detail") {
      this.activatedStatus.Blog = "active"
    }
    if (router == "kontak") {
      this.activatedStatus.Contact = "active"
    }

    // console.log(router);
  },
}
</script>




