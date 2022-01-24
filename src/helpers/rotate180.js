export const rotate180 = ({ target }) => {
  console.log(target);
  console.log(target.classList);
  target.classList.toggle("rotate180");
  console.log(target.classList);
};
