// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyBucket = [];
  for (let i = 0; i < musicians.length; i++) {
    emptyBucket.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return emptyBucket;
}
function johnLennonFacts(facts) {
  var n = 0
  var emptyBucket = [];
  while (n < facts.length) {
    n++ ;
    emptyBucket.push(`${facts[n]} !!!`)
  }
  return emptyBucket;
}