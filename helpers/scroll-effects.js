export default function (id) {
  const elem = document.getElementById(id);
  if (elem && window.innerWidth <= 768) elem.scrollIntoView();
}
