<template>
  <div class="home">
    <h2>Home Page</h2>
    <item v-for="story in stories" :key="story.id" :story="story">
      <router-link :to="{ path: '/story/' + story.data.id }">
          <h3>{{ story.data.title }}</h3>
      </router-link>
      <p>Type: {{ story.data.type }}</p>
      <p>Link: {{ story.data.url }}</p>
      <p>Score: {{ story.data.score }}</p>
    </item>
  </div>
</template>

<script>
import axios from "axios";
import Item from "../views/Item";

export default {
  name: 'Home',
  components: {
    'item': Item
  },
  data: function () {
    return {
      err: "",
      stories: []
    };
  },
  created: function () {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(result => {
        this.results = result.data.slice(0, 10);
        console.log(this.results);
        this.results.forEach(element => {
          axios
            .get("https://hacker-news.firebaseio.com/v0/item/" + element + ".json")
            .then(result => {
              console.log(result);
              this.stories.push(result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        this.err = err;
      });
  }
};
</script>
<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: o;
    margin: 0;
  }
</style>
