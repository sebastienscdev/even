<template>
  <div id="app">
    <div class="SideBar">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a @click="loadMarkup(link.url)" href="#">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div class="Main">
      <div class="markdown-body">
        <div v-html="centerDoc"></div>
      </div>
    </div>
  </div>
</template>

<script>
import renderMarkdown from './renderMarkdown';

export default {
  name: 'App',
  data() {
    return {
      centerDoc: '',
      links: [
        { name: 'Bienvenue', url: '/docs/bienvenue.md' },
        { name: 'Nav', url: '/docs/nav.md' },
        { name: 'Nav Bars', url: '/docs/navbar.md' },
        { name: 'Boutons', url: '/docs/btn-primary.md' },
      ],
    };
  },
  created() {
    this.loadMarkup(this.links[0].url);
  },
  methods: {
    loadMarkup(urlMarkup) {
      fetch(urlMarkup).then((response) => {
        response.text().then((md) => {
          this.centerDoc = renderMarkdown(md);
        });
      });
    },
  },
};
</script>

<style lang="scss">

body{
  font-family: 'CircularStd', sans-serif;
}

.SideBar {
  position: fixed;
  font-family: 'CircularStd';
  width: 12rem;
  border-top: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  top: 0;
  bottom: 0;
  left: 0;
  ul{
    list-style-type: none;
    li {
      margin-top: 0.5em;
      font-weight: 600;
    }
  }
}

a{
  text-decoration: none;
}

.Main {
    max-width: 52rem;
    margin-left: auto;
    margin-right: auto;
}

.Example {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 3px;
  .Example-Demo{
    padding: 1em;
  }
}
</style>
