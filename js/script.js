
/* Admittedly ridiculous hack to work around FF CSS3 limitations */

Modernizr.addTest('webkit', function () {
  return !!navigator.userAgent.match(/webkit/i);
});