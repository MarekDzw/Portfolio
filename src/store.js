import Vue from "vue";

export const store = Vue.observable({
  isNavOpen: false,
  navItems: [
    { title: "usługi", url: "/services", page: true },
    { title: "współpraca", url: "/partnership", page: true },
    { title: "portfolio", url: "/portfolio", page: true },
    { title: "kontakt", url: "#contact", page: false }
  ],
  sections: [
    {
      title: "o firmie",
      contentText:
        "Firma została założona w 2019 roku, lecz pierwsze projekty stron powstawały już 4 lata wcześniej. Obecnie zajmuję się tworzeniem stron, blogów i wizytówek dopasowanych do potrzeb klienta. Rozwiązania indywidualne pozwalają na realizację każdego pomysłu.",
      image: {
        src: require("@/assets/img/komp.png"),
        alt: "Portfolio"
      },
      contact: {
        state: false
      },
      button: {
        text: "Zobacz realizacje",
        link: "/portfolio"
      },
      background: {
        all: true,
        grad: false
      }
    },
    {
      title: "portfolio",
      contentText:
        "Portfolio zrealizowanych przeze mnie projektów nieustająco się powiększa. Szukasz inspiracji na swoją stronę lub bloga? Zachęcam do reguralnego odwiedzania sekcji portfolio. Kiedyś może twoja strona też się tam znajdzie!",
      image: {
        src: require("@/assets/img/marek.png"),
        alt: "Portfolio"
      },
      contact: {
        state: false
      },
      button: {
        text: "Zobacz portfolio",
        link: "/portfolio"
      },
      background: {
        all: false,
        grad: true
      }
    },
    {
      title: "kontakt",
      contentText:
        "Potrzebujesz stworzenia strony od A do Z? Internetowa wizytówka twojej firmy straciła swój urok? Może masz pomysł na własną aplikacje? Czy może chcesz ze mną współpracować? Zapraszam do kontaktu!",
      image: {
        src: require("@/assets/img/kontakt.png"),
        alt: "Kontakt"
      },
      contact: {
        state: true,
        phone: "786 243 312",
        mail: "kontakt@marekdzwonnik.pl"
      },
      button: {
        text: "Wypełnij formularz",
        link: "/contact"
      },
      background: {
        all: false,
        grad: false
      }
    }
  ],
  tile: [
    {
      title: "Blogi",
      subtitle: "Publikuj artykuły",
      image: {
        src: require("@/assets/img/blog.png"),
        alt: "Blogi"
      },
      content:
        "Lorem ipsum dodalsd kalsdk lasldk alsdk alskd alsd kal kald kasld kas dlkasdl aks dlaskdlask las kalkal kal",
      button: {
        text: "czytaj więcej",
        link: "/services/blogi"
      },
      class: "color-st"
    },
    {
      title: "Strony internetowe",
      subtitle: "Zaistniej w sieci",
      image: {
        src: require("@/assets/img/pages.png"),
        alt: "Blogi"
      },
      content:
        "Lorem ipsum dodalsd kalsdk lasldk alsdk alskd alsd kal kald kasld kas dlkasdl aks dlaskdlask las kalkal kal",
      button: {
        text: "czytaj więcej",
        link: "/services/blogi"
      },
      class: "color-nd"
    },
    {
      title: "Rozwiązania indywidualne",
      subtitle: "Wyróżnij się",
      image: {
        src: require("@/assets/img/ind.png"),
        alt: "Blogi"
      },
      content:
        "Lorem ipsum dodalsd kalsdk lasldk alsdk alskd alsd kal kald kasld kas dlkasdl aks dlaskdlask las kalkal kal",
      button: {
        text: "czytaj więcej",
        link: "/services/blogi"
      },
      class: "color-rd"
    }
  ]
});
export const mutations = {
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  }
};
