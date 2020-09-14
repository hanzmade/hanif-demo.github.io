<template>
  <div id="app">
    <a href="#main" class="skip-link">Menuju ke konten</a>
    <nav class="toolbar">
      <header class="wrapper">
        <span class="sidenav-trigger side-col" onclick="openNav()">&#9776;</span>
        <img src="./assets/logo.png" alt="logo wippy crispy" class="logo-col">
        <h1 class="title-col">Wippy Crispy</h1>
        <ul class="menu-col">
          <li><router-link to="/" class="fa fa-home"></router-link></li>
            <li><router-link to="/me">Me</router-link></li>
            <li class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">About Us</a>
              <div class="dropdown-content">
                <a href="https://www.linkedin.com/in/hanif-ramadhan-74204a165/">LinkedIn</a>
                <a href="https://www.instagram.com/hanif_ram/">Instagram</a>
              </div>
            </li>
        </ul>
      </header>
      <aside>
        <ul class="sidenav" id="nav-mobile">
          <a class="closebtn" onclick="closeNav()">&times;</a>
          <li><router-link class="waves-effect fa fa-home" to="/"></router-link></li>
          <li><router-link class="waves-effect" to="/me">Me</router-link></li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">About Us</a>
            <div class="dropdown-content">
              <a href="https://www.linkedin.com/in/hanif-ramadhan-74204a165/">LinkedIn</a>
              <a href="https://www.instagram.com/hanif_ram/">Instagram</a>
            </div>
          </li>
        </ul>
      </aside>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
