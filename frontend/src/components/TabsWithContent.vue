<template>
  <div id="tab-info">
    <div class="container">
      <div class="tab">
        <button 
          v-for="tab in contents"
          :key="tab.id"
          class="tablinks" 
          :class="{ active: visibleTabs.includes(tab.id) }" 
          @click="showTab(tab.id)" 
          :id="visibleTabs.includes(tab.id) && 'defaultOpen'"
        >
          {{ tab.title }}
        </button>
      </div>
      <div v-for="content in contents" :key="content.id">
        <div 
          v-if="visibleTabs.includes(content.id)" 
          :id="'tab-'+content.id" 
          class="tabcontent" 
          style="display: block;" 
          v-html="content.content"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      visibleTabs: [1],
      tabNum: 1,
      contents: []
    };
  },
  props: {
    pageName: {
      type: String,
      default: () => {null},
      required: true
    }
  },
  methods: {
    showTab(tab) {
      this.visibleTabs = [tab];
    },
  },
  mounted () {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/${this.pageName}`)
      .then(response => {
        this.contents = response.data;
      })
  }
};

</script>