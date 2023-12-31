import './style.css';

function addEventListeners() {
  const expand = document.querySelectorAll('.expandable');
  expand.forEach(function (window) {
    window.addEventListener('click', (e) => {
      expandTile(e);
    });
  });
  const close = document.querySelectorAll('.close-btn');
  close.forEach(function (window) {
    window.addEventListener('click', (e) => {
      closeBtn(e);
    });
  });
}

function expandTile(e) {
  let src = e.srcElement.attributes[0].nodeValue;
  let expandedContainer = document.getElementById('expanded-container');
  expandedContainer.style.display = 'flex';
  let tile = document.getElementById('expanded-tile');

  let img = document.createElement('img');

  img.src = `${src}`;
  img.id = 'img';

  tile.appendChild(img);
}

function closeBtn(e) {
  console.log(e);
  let img = document.getElementById('img');
  img.remove();
  let id = e.target.parentElement.parentElement.id;
  let grandParent = document.getElementById(id);
  grandParent.style.display = 'none';
}

addEventListeners();
