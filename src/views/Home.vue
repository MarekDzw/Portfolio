<template>
  <div class="wrapper flex">
    <NextPage v-bind:sections="sections[0]" />
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
      reprehenderit ipsum amet, libero quidem beatae aliquid quis impedit
      debitis ab!
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
      reprehenderit ipsum amet, libero quidem beatae aliquid quis impedit
      debitis ab!
    </div>
    <NextPage v-bind:sections="sections[1]" />
    <NextPage v-bind:sections="sections[2]" />
  </div>
</template>

<script>
import NextPage from "../components/NextPage.vue";

export default {
  name: "home",
  components: {
    NextPage
  },
  data() {
    return {
      sections: [
        {
          title: "o firmie",
          contentText:
            "lorem ipsum asd klmasd klmfd gklmsd lkgmslkd amsdklamksdk lmasdlk amklsd maklsd maklskdm alks mdaklsd maslk dmlkgfdsmlk msdlfkgm sdlkfgm dsklfgm sdlkfgmdslkfgm sdlkfgm lsdkfgm sldkfgm lsdkfgm sdlkfgms lkdfmg lksdfmg lksdfmg lkdsmf glksdmfg lksdmfglksdmfglk",
          image: {
            src: require("@/assets/img/komp.png"),
            alt: "Portfolio"
          },
          contact: {
            phone: "",
            mail: ""
          },
          button: {
            text: "Zobacz realizacje",
            link: "/portfolio"
          }
        },
        {
          title: "portfolio",
          contentText:
            "lorem ipsum asd klmasd klmfd gklmsd lkgmslkd amsdklamksdk lmasdlk amklsd maklsd maklskdm alks mdaklsd maslk dmlkgfdsmlk msdlfkgm sdlkfgm dsklfgm sdlkfgmdslkfgm sdlkfgm lsdkfgm sldkfgm lsdkfgm sdlkfgms lkdfmg lksdfmg lksdfmg lkdsmf glksdmfg lksdmfglksdmfglk",
          image: {
            src: require("@/assets/img/marek.png"),
            alt: "Portfolio"
          },
          contact: {
            phone: "",
            mail: ""
          },
          button: {
            text: "Zobacz portfolio",
            link: "/portfolio"
          }
        },
        {
          title: "kontakt",
          contentText:
            "lorem ipsum asd klmasd klmfd gklmsd lkgmslkd amsdklamksdk lmasdlk amklsd maklsd maklskdm alks mdaklsd maslk dmlkgfdsmlk msdlfkgm sdlkfgm dsklfgm sdlkfgmdslkfgm sdlkfgm lsdkfgm sldkfgm lsdkfgm sdlkfgms lkdfmg lksdfmg lksdfmg lkdsmf glksdmfg lksdmfglksdmfglk",
          image: {
            src: require("@/assets/img/kontakt.png"),
            alt: "Kontakt"
          },
          contact: {
            phone: "786 243 312",
            mail: "kontakt@marekdzwonnik.pl"
          },
          button: {
            text: "",
            link: ""
          }
        }
      ]
    };
  }
};
</script>

<style></style>
