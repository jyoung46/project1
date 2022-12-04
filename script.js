console.clear()
console.log(1.0);
let md = 0


// document.addEventListener("mouseover", (e) => {
//   if(e.target.tagName === 'circle'){
//     e.target.classList.add('active')
//   }
// });

document.addEventListener("mouseout", (e) => {
  
  document.body.style.cursor = 'pointer'
});
document.addEventListener("click", (e) => {
  document.querySelectorAll('.active').forEach((a)=>{
    a.classList.remove('active')
  })
  if(e.target.tagName === 'circle'){
    e.target.classList.add('active')
  }
});
document.addEventListener("mousedown", (e) => {
  if(e.target.classList.contains('active'))
  md = 1
});

document.addEventListener("mousemove", (e) => {
  md === 1? setSize(e):''
  
});

document.addEventListener("mouseup", () => {
  md = 0
});
function setSize(e){
  const circle = document.querySelector('.active')
  let pos = {
    x: circle.getAttribute("cx"),
    y: circle.getAttribute("cy")
  },
  a = e.clientX - pos.x,
  b = e.clientY - pos.y,
  r = Math.sqrt(a * a + b * b);
  circle.setAttribute("r", r);
  console.log(e);
}
