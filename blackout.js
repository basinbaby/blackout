// blackout.js

/* TODO:
 * Test as marklet
 * Test as Firefox addon
 * More reffined color adjustments
 * Format properly
 * Improve code clarity
 * Change SVG path fills, for read / recieved ticks,
   not quite sure how to go about it as new svg
   ticks are added as messages are recieved
*/


console.clear();
for (var j = 0; j < document.styleSheets.length; j++) {
  var ss = document.styleSheets[j];
  for (var i = 0; i < ss.cssRules.length; i++) {
    var r = ss.cssRules[i];
    if (r.type != CSSRule.STYLE_RULE)
      continue;
    var txt = r.cssText;
    if (txt.includes("rgb(")) {
      var txt2 = txt.split("rgb(");
      for (var k = 1; k < txt2.length; k++) {
        var txt3 = [];
        txt2[k].split(",").forEach((s, i) => {
          if (i > 2) {
          	txt3.push(s);
          	return;
          }
          var txt4 = s.split(")");
          txt4[0] = (255 - (parseInt(txt4[0]) * 0.9)|0) + "";
          txt3.push(txt4.join(")"));
        });
        txt2[k] = txt3.join(",");
      }
      var new_txt = txt2.join("rgb(");
      r.cssText = new_txt;
      //if(txt2.length>2)
      	//console.log(new_txt);
      ss.deleteRule(i);
      ss.insertRule(new_txt);
    } // rgb

    if (txt.includes("rgba(")) {
      var txt2 = txt.split("rgba(");
      for (var k = 1; k < txt2.length; k++) {
        var txt3 = [];
        txt2[k].split(",").forEach((s, i) => {
          if (i > 2) {
          	txt3.push(s);
          	return;
          }
          var txt4 = s.split(")");
          txt4[0] = (255 - (parseInt(txt4[0]) * 0.9)|0) + "";
          txt3.push(txt4.join(")"));
        });
        txt2[k] = txt3.join(",");
      }
      var new_txt = txt2.join("rgba(");
      r.cssText = new_txt;
      //if(txt2.length>2)
      	//console.log(new_txt);
      ss.deleteRule(i);
      ss.insertRule(new_txt);
    } // rgba
  }
}
console.log("d o n e .");
