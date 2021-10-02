# Learn CSS II - Grid

[TOC]

</br>

## Grids terms and properties

### Grid
- A tool used to lay out web pages
- Note: Flexbox is mainly used for positioning items in 1D; the grid helps with 2D layouts
- To make an element a grid container, set `display` to one of:
  - `grid`: block-level grid
  - `inline-grid`

### `grid-template-columns`
- Because grids only contain one column by default, this property tells how many columns and how wide each column should be
- For example
`.grid {

  display: grid;
  
  width: 500px;
  
  grid-template-columns: 100px 200px;
}`











<img src="example.png" alt="drawing" width="500"/>