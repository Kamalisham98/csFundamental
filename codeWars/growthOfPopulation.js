function nbYear(p0, percent, aug, p) {
    // your code
  tahun=0;
  while(p0<p){
    p0 += p0*percent/100 + aug;
    tahun++
  }
  return tahun;
}