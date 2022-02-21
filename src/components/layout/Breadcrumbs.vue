<template>
    <!-- ======= Breadcrumbs ======= -->
    <section class="breadcrumbs">
    <div class="container">

      <ol>
        <li>
          <a href="/">Beranda</a>
        </li>
        <li>
          <a v-bind:href="link1">
            {{binding.name}}
          </a>
        </li>
        <li v-if="binding.secondName != null">
          <a v-bind:href="link2">
            {{binding.secondName}}
          </a>
        </li>
      </ol>

      <h2 v-if="binding.secondName != null">{{binding.secondName}}</h2>
      <h2 v-else>{{binding.name}}</h2>

    </div>
    </section><!-- End Breadcrumbs -->
</template>

<script>
export default {
  props:[
    "binding"
  ],
  data(){
    return{
      link1:"/"+this.binding.name.replace(/\s/g, ""),
      link2: (this.binding.secondName != null) ? ("/" + this.binding.name + "/" + this.binding.secondName.replace(/\s/g, "")) : (""),
    }
  },
  methods:{
    // linked(){
    //   if (this.props[0].secondName != null) {
    //     this.link = "/" + this.props[0].name + "/" + this.props[0].secondName;
    //   }
    // }
  },
  // mounted(){
  //   this.linked();
  // }
}
</script>