<template>
  <div class="player-table">
    <div class="player-table-timestamp">
      <p>
        Dernierement mis à jour : <span>{{ new Date(players_timestamp).toLocaleString("fr-FR") }}</span>
      </p>
    </div>
    <div class="flexElements">
      <input v-model="search" type="text" placeholder="Rechercher par nom/prénom ou club" class="search" />
      <div class="selector">
        <select name="playersPerPage" id="playersPerPage" v-model="itemsPerPage" class="select" @change="changeItemsPerPage($event.target.value)">
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <p>Joueurs par page</p>
      </div>
    </div>

    <!-- If we are between September and December -->
    <table class="table" v-if="this.month >= 9 && this.month <= 12">
      <thead>
        <tr>
          <th @click="sort('CLUB')" class="clickable">Club</th>
          <th @click="sort('FULL_NAME')" class="clickable">Nom</th>
          <th>Pts</th>
          <th>Pts FFTT</th>
          <th>Club FFTT</th>
          <th>Mutation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, index) in paginatedPlayers" :key="index">
          <td>{{ player.FULL_NAME }}</td>
          <td>{{ player.CLUB }}</td>
          <td>{{ player.POINTS_FORWARD }}</td>
          <td>{{ player.FFTT.FORWARD_POINTS || "/" }}</td>
          <td>{{ player.FFTT.CLUB || "/" }}</td>
          <td>{{ player.MUTATION }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Else, we are between January and August -->

    <table class="table" v-else>
      <thead>
        <tr>
          <th @click="sort('FULL_NAME')" class="clickable">Nom</th>
          <th @click="sort('CLUB')" class="clickable">Club</th>
          <th>Pts</th>
          <th>Pts FFTT</th>
          <th>Club FFTT</th>
          <th>Mutation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, index) in paginatedPlayers" :key="index">
          <td>{{ player.FULL_NAME }}</td>
          <td>{{ player.CLUB }}</td>
          <td>{{ player.POINTS_BACKWARD || player.POINTS_FORWARD }}</td>
          <td>{{ player.FFTT.BACKWARD_POINTS || player.FFTT.FORWARD_POINTS || "/" }}</td>
          <td>{{ player.FFTT.CLUB || "/" }}</td>
          <td>{{ player.MUTATION }}</td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="changePage(-1)" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} sur {{ totalPages }}</span>
      <button @click="changePage(1)" :disabled="currentPage === totalPages">Next</button>
      <div class="selector">
        <select name="playersPerPage" id="playersPerPage" v-model="itemsPerPage" class="select" @change="changeItemsPerPage($event.target.value)">
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <p>Joueurs par page</p>
      </div>
    </div>
  </div>

  <button @click="topFunction" class="button toTop" id="GoToTop" />
</template>

<script>
export default {
  name: "PlayerTable",
  props: {
    players: Object,
    players_timestamp: Number,
  },
  data() {
    return {
      sorted: false,
      sortType: "CLUB",
      currentSortDir: "asc",
      search: "",
      month: 1,
      currentPage: 1,
      itemsPerPage: 25,
      totalPages: 1,
    };
  },

  mounted() {
    window.onscroll = function () {
      let mybutton = document.getElementById("GoToTop");

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    this.month = new Date().getMonth() + 1;
  },

  unmounted() {
    window.onscroll = null;
  },

  computed: {
    sortedPlayers: function () {
      return this.players.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.sortType] < b[this.sortType]) return -1 * modifier;
        if (a[this.sortType] > b[this.sortType]) return 1 * modifier;
      });
    },

    filteredPlayers: function () {
      const searchTerm = this.search.toLowerCase();
      return this.sortedPlayers.filter((player) => {
        return player.FULL_NAME.toLowerCase().includes(searchTerm) || player.CLUB.toLowerCase().includes(searchTerm);
      });
    },

    paginatedPlayers: function () {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;

      this.totalPages = Math.ceil(this.filteredPlayers.length / this.itemsPerPage);
      return this.filteredPlayers.slice(start, end);
    },

    getMonth: function () {
      // get month
      const date = new Date();
      const currentMonth = date.getMonth();

      return currentMonth;
    },
  },

  methods: {
    sort: function (type) {
      if (type === this.sortType) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.sortType = type;
    },

    topFunction: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    changePage: function (increment) {
      this.currentPage += increment;
    },

    changeItemsPerPage: function (value) {
      this.itemsPerPage = Number(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.player-table {
  margin-top: 3.5rem;

  .player-table-timestamp {
    p {
      font-size: 0.8rem;
    }

    span {
      font-weight: bold;
    }
  }
  .table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.15rem;
    text-align: left;

    margin-bottom: 2rem;
    th {
      background-color: rgba(136, 136, 136, 0.094);
      padding: 0.75rem;
      text-align: left;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid white;
    }

    th:first-of-type {
      border-top-left-radius: 0.5rem;
    }

    th:last-of-type {
      border-top-right-radius: 0.5rem;
    }

    td {
      padding: 1rem 0.75rem;
      border-bottom: 0.5px solid #9696961e;
      border-left: 0.5px solid #9696961e;
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
    tr:nth-child(even) {
      background-color: rgba(156, 156, 156, 0.094);
    }
  }

  tbody tr {
    padding: 0.75rem;
  }

  .clickable {
    cursor: pointer;
    &:hover {
      // Smooth transition
      transition: all 0.2s ease-in-out;
      // Change color
      color: #be9931;
    }
    &::after {
      // Add arrow icon
      content: "⇅";
      // Add space between icon and text
      margin-left: 0.5rem;
    }
  }
}
.toTop {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  opacity: 0.65;
  z-index: 99;
  &::after {
    content: "▲";
  }
  &:hover {
    opacity: 1;
  }
}

.button {
  border: none;
}

.search {
  width: 65%;
  margin: 1rem;
  padding: 1.25rem 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: rgba(136, 136, 136, 0.094);
  color: white;
  font-size: 1rem;
  text-align: center;
  &:focus {
    outline: none;
  }
}

.flexElements {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.selector {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.select {
  appearance: none;

  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;

  // background-color:
  color: white;
  font-size: 1rem;
  text-align: center;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(136, 136, 136, 0.094);
  }

  & > option {
    background-color: #2e2e2e;
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 0.5rem;

    &:hover {
      background-color: rgba(136, 136, 136, 0.094);
      cursor: pointer;
      appearance: none;
    }
  }
}

.pagination span {
  margin: 0 1rem;
}
</style>
