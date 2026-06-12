const fs=require('fs');
let css=fs.readFileSync('src/App.css','utf8');
css=css.replace(/font-size:\s*(\d+(?:\.\d+)?)px/g, (m,p1) => {
  let s=parseFloat(p1);
  if(s >= 9 && s <= 30) {
    return `font-size: ${s+1.5}px`;
  }
  return m;
});
fs.writeFileSync('src/App.css',css);
