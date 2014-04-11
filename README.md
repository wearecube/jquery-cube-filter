# jQuery Cube Filter #

Filter a list of items by class name.

## Usage ##

Define a filter list:

    <ul id="filter-list">
      <li class="filter-item selected">
        <a href="">All</a>
      </li>
      <li class="filter-item">
        <a href="fruit-type-berry">True berry</a>
      </li>
      <li class="filter-item">
        <a href="fruit-type-hespe">Hesperidium</a>
      </li>
      <li class="filter-item">
        <a href="fruit-type-access">Accessory fruit</a>
      </li>
    </ul>

Add filter classes to the content:

    <div id="fruit-list">
      <div class="fruit-item fruit-type-berry">
        <h2>Tomato</h2>
        <p>
          The tomato is the edible, often red fruit/berry of the nightshade Solanum lycopersicum, commonly known as a tomato plant.
        </p>
      </div>
      <div class="fruit-item fruit-type-berry">
        <h2>Chili pepper</h2>
        <p>
          The chili pepper is the fruit of plants from the genus Capsicum, members of the nightshade family, Solanaceae.
        </p>
      </div>
      <div class="fruit-item fruit-type-berry">
        <h2>Blueberry</h2>
        <p>
          Blueberries are perennial flowering plants with indigo-colored berries from the section Cyanococcus within the genus Vaccinium (a genus that also includes cranberries and bilberries).
        </p>
      </div>
      <div class="fruit-item fruit-type-hespe">
        <h2>Orange</h2>
        <p>
          The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus sinensis in the family Rutaceae.
        </p>
      </div>
      <div class="fruit-item fruit-type-hespe">
        <h2>Lemon</h2>
        <p>
          The lemon is a small evergreen tree native to Asia, and the tree's ellipsoidal yellow fruit.
        </p>
      </div>
      <div class="fruit-item fruit-type-access">
        <h2>Apple</h2>
        <p>
          The apple is the pomaceous fruit of the apple tree, species Malus domestica in the rose family (Rosaceae).
        </p>
      </div>
      <div class="fruit-item fruit-type-access">
        <h2>Strawberry</h2>
        <p>
          The garden strawberry is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries).
        </p>
      </div>
    </div>

Apply the plugin to the filter list element:

    $(function() {
      $("#filter-list").cubeFilter({
        filterItemClass: 'filter-item',
        filterItemSelectedClass: 'selected',
        targetGroupSelector: '#fruit-list',
        targetItemClass: 'fruit-item',
        targetItemHiddenClass: 'hidden'
      });
    });

Style the selected filter and the hidden elements:

    .filter-item.selected {
       font-weight: bold;
     }
     .fruit-item.hidden {
       display: none;
     }
