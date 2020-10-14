<template>
  <div id="main" @click="toggleBig(), toggleFloatUp()">
    <div id="container">
      <div id="content">
        <p :class="{ big: bigOn }">hej</p>
      </div>

      <div id="links" :class="{ floatUp: floatUpOn }">
        <p>
          och välkommen till <br />
          mitt digitala visitkort.
        </p>
        <div id="icons">
          <a href="https://github.com/Nordatlanten"
            ><img :src="github" alt="Githubs Ikon"
          /></a>
          <a href="https://www.linkedin.com/in/atlan-talebi-95b7591a2/">
            <img :src="linkedin" alt="LinkedIns Ikon"
          /></a>
        </div>
      </div>
    </div>
  </div>
  <!-- main -->
</template>

<script>
export default {
  created() {
    this.$store.commit("toggleBig");
  },
  computed: {
    bigOn() {
      return this.$store.state.big;
    },
    github() {
      return this.$store.state.githubIcon;
    },
    floatUpOn() {
      return this.$store.state.floatUp;
    },
    linkedin() {
      return this.$store.state.linkedinIcon;
    },
  },

  methods: {
    toggleBig() {
      this.$store.commit("toggleBig");
    },
    toggleFloatUp() {
      this.$store.commit("toggleFloatUp");
    },
  },
};
</script>

<style scoped>
#main {
  background-color: black;
  height: 100vh;
  overflow-y: hidden;
}

#container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#links {
  font-size: 1.2em;
  margin-top: 1em;
  transform: translateY(60vh);
}

#icons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@keyframes getBigger {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(5);
  }
}

.big {
  transform: scale(5);
  animation-name: getBigger;
  animation-duration: 2s;
}

@keyframes floatUp {
  0% {
    transform: translateY(60vh);
  }

  60% {
    transform: translateY(60vh);
  }

  100% {
    transform: translateY(0vh);
  }
}

.floatUp {
  animation: floatUp 5s forwards;
  animation-timing-function: ease-in-out;
}
</style>
