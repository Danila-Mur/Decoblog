import './index.sass';

function resizeGridItem(item) {
  let grid = document.querySelectorAll('.grid__cards')[0];
  let rowHeight = parseInt(
    window.getComputedStyle(grid, null).getPropertyValue('grid-auto-rows')
  );
  let rowGap = parseInt(
    window.getComputedStyle(grid, null).getPropertyValue('grid-row-gap')
  );
  let rowSpan = Math.ceil(
    (item.querySelector('.grid__card-content').getBoundingClientRect().height +
      rowGap) /
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = 'span ' + rowSpan;
}

function resizeAllGridItems() {
  let allItems = document.querySelectorAll('.grid__card');
  for (let x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

window.onload = resizeAllGridItems();
window.addEventListener('resize', resizeAllGridItems);
