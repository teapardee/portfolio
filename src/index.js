import './style.css';

function addEventListeners() {
  const expand = document.querySelectorAll('.expandable');
  expand.forEach(function (window) {
    window.addEventListener('click', (e) => {
      expandTile(e);
    });
  });
}

function expandTile(e) {
  console.log('test');

  let src = e.srcElement.attributes[0].nodeValue;
  let expandedContainer = document.getElementById('expanded-container');
  expandedContainer.style.display = 'flex';
  let tile = document.getElementById('expanded-tile');

  let img = document.createElement('img');
  img.src = `${src}`;

  tile.appendChild(img);
}

addEventListeners();
