<template>
  <Navbar />
  <h1>Joueurs</h1>

  <div v-if="!loading">
    <player-table :players="players" :players_timestamp="players_timestamp"></player-table>
  </div>
  <div v-else>
    <table class="table">
      <thead>
        <tr>
          <th class="clickable">Nom</th>
          <th class="clickable">Club</th>
          <th>Pts</th>
          <th>Pts FFTT</th>
          <th>Club FFTT</th>
          <th>Mutation</th>
        </tr>
      </thead>
      <tbody>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
        <tr class="loading">
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
          <td><span></span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PlayerTable from "../components/PlayerTable.vue";
import Navbar from "../components/Navbar.vue";

import {fetchData} from "../assets/script.js";

export default {
  name: "Players",
  components: {
    PlayerTable,
    Navbar,
  },

  data() {
    return {
      loading: true,
      players: [],
      players_timestamp: 0,
    };
  },

  async mounted() {
    if (!localStorage.getItem("players")) {
      this.players = await fetchData();
      localStorage.setItem("players", JSON.stringify(this.players));
      localStorage.setItem("players-timestamp", Date.now());
      this.players_timestamp = Date.now();
    } else {
      // check if data is older than 10 days
      if (localStorage.getItem("players-timestamp") < Date.now() - 1000 * 60 * 60 * 24 * 10) {
        this.players = await fetchData();
        localStorage.setItem("players", JSON.stringify(this.players));
        localStorage.setItem("players-timestamp", Date.now());
        this.players_timestamp = Date.now();
      } else {
        this.players = JSON.parse(localStorage.getItem("players"));
        this.players_timestamp = Math.floor(localStorage.getItem("players-timestamp"));
      }
    }
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
tr.loading {
  background-image: linear-gradient(to right, transparent 50%, rgba(0, 0, 0, 0.05) 50%);
  background-size: 200% 100%;
  animation: loading 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

tr.loading td {
  opacity: 0.45;
  pointer-events: none;
}

@keyframes loading {
  0% {
    background-position: 0;
  }
  50% {
    background-position: -30%;
  }
  80% {
    background-position: -100%;
  }
  100% {
    background-position: -200%;
  }
}

.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.15rem;
  text-align: left;
  th {
    background-color: rgba(136, 136, 136, 0.094);
    padding: 0.75rem;
    text-align: left;
  }
  td {
    padding: 1.25rem;
    border-bottom: 1px solid #969696;
  }
  td:first-of-type {
    font-weight: bold;
  }
  td:nth-of-type(2) {
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  tbody tr {
    padding: 1.75rem;
  }
}

.clickable {
  cursor: pointer;
  &:hover {
    // Smooth transition
    transition: all 0.2s ease-in-out;
    // Change color
    color: rgb(0, 151, 153);
    // Change background color
    background-color: rgba(136, 136, 136, 0.094);
  }
  &::after {
    // Add arrow icon
    content: "⇅";
    // Add space between icon and text
    margin-left: 0.5rem;
  }
}
</style>
