fs = require('fs');

USAGE = 'Usage: node sort.js filename';

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) {
    return console.log(USAGE);
  }
  
  var leases = data.split('\n');
  if(leases[leases.length] === undefined) {
    //remove final newline from file if it exists
    leases.splice(leases.length - 1, 1);
  }

  leases.sort(function(x, y){
    subX = x.substring(x.indexOf('#') + 1, x.indexOf(' ') - 1);
    subY = y.substring(y.indexOf('#') + 1, y.indexOf(' ') - 1);
    return subX == subY ? 0 : subX < subY ? -1 : 1;
  });
  
  leases.forEach(function(lease) {
    console.log(lease); //calls process.stdout.write with formatted output
  });
});
