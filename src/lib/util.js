export const id = x => x;
export const json = r => r.json();
export const when = (x, then, not = "") => (x ? then : not);
export const repeat = x => when(x, `repeat(${x}, 1fr)`);
export const concat = text => x => when(x, `${x}${text}`);
export const get = p => props => when(props[p], props[p]);
export const compose = (...fns) => x => fns.reduceRight((a, fn) => fn(a), x);

export const grid = p =>
  compose(
    repeat,
    get(p)
  );

export const pixel = p =>
  compose(
    concat("px"),
    get(p)
  );

export const display = ({ flex, grid, block, iblock, inline }) =>
  `${
    flex
      ? "flex"
      : grid
      ? "grid"
      : block
      ? "block"
      : inline
      ? "inline"
      : iblock
      ? "inline-block"
      : ""
  }`;
