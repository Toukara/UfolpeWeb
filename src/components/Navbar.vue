<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="navbar">
    <div class="navbar_brand">
      <router-link to="/">Home</router-link>
    </div>
    <div class="navbar_menu">
      <a class="navbar-item">
        <router-link to="/players">Pts Joueurs</router-link>
      </a>
      <a class="navbar-item">
        <router-link to="/contact">Contact</router-link>
      </a>
      <a class="navbar-item">
        <router-link to="/products">Products</router-link>
      </a>
    </div>

    <div class="navbar_burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 70vw;
  margin: 0 auto;

  border-bottom: 1px solid #eaeaea;

  &_brand > a {
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    color: white;

    &:hover {
      color: #be9931;
      transition: all 0.3s ease-in-out;
    }
  }

  &_menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.85rem;
    width: 25vw;
    margin-left: auto;

    .navbar-item > a {
      text-decoration: none;
      padding: 0.25rem;
      color: white;
      &:hover {
        color: #be9931;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
      }
    }
  }

  &_burger {
    display: none;

    span {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px auto;
      background-color: #ffffff;
      transition: all 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 768px) {
    &_menu {
      display: none;
    }

    &_burger {
      display: block;
    }
  }
}
</style>
