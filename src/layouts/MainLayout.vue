<template>
  <main>
    <header>
    <ul id="dropdown1" class="dropdown-content">
      <li>
        <form action="#">
          <p>Select Genre</p>
          <div class="genre__wrapper">
            <p>
              <label>
                <input type="checkbox" />
                <span>Action</span>
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" />
                <span>Adventure</span>
              </label>
            </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Animation</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Comedy</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Crime</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Documentary</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Drama</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Fantasy</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Family</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>History</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Horror</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Music</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Mystory</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Romance</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Science fiction</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Tv Movie</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>Thriller</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>War</span>
                </label>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Western</span>
                  </label>
                </p>
              </p>
            </div>
          </form>
          <form action="#">
            <p>Sort movies by</p>
            <div class="sort__wrapper">
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Popularity</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Average votes</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Number of votes</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Original title</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Release date</span>
                </label>
              </p>
            </div>
          </form>
        </li>
      </ul>
      <nav class="lime">
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Movie Searcher</a>
          <ul class="right hide-on-med-and-down">
            <!-- Dropdown Trigger --> 
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Options<i class="material-icons right"></i></a></li>
            <li>
              <div class="search-wrapper">
                <input id="search" placeholder="Search">
                <div class="search-result"></div>
              </div>
            </li>    
            <li><a href="favorites.html">Favorite</a></li>
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