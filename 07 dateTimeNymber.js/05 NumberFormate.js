const num = 12543226.24;

console.log("US:", new Intl.NumberFormat("en-US").format(num));
//US: 12,543,226.24
console.log("Germany:", new Intl.NumberFormat("de-DE").format(num)); //Germany: 12.543.226,24
console.log("Syrial:", new Intl.NumberFormat("ar-SY").format(num));
// Syrial: ١٢٬٥٤٣٬٢٢٦٫٢٤
//we can use navigator.language instead of defining any specific langauge
//which select browser language and decide formate accordingly

//do moore it letter
