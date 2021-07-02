import Masonry from 'masonry-layout';
import './index.sass';

let elem = document.querySelector('.grid__cards');
let msnry = new Masonry(elem, {
  itemSelector: '.grid__card',
  columnWidth: 360,
});
