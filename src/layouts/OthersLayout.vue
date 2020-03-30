<template>
  <main>
    <header>
      <nav class="lime">
        <div class="nav-wrapper">
          <a href="index.html" class="brand-logo">Movie Searcher</a>
          <ul class="right hide-on-med-and-down">
            <li>
              <div class="search-wrapper">
                <input id="search" placeholder="Search">
                <div class="search-result"></div>
              </div>
            </li>    
            <li><a href="index.html">Home</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="container">
      <router-view />
    </div>
     <footer class="page-footer lime">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Created by Er1danus</h5>
            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © 2020 Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  </main>
</template>