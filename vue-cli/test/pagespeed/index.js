const psi = require('psi');

// Get the PageSpeed Insights report
psi('theverge.com').then(data => {
  console.log(data.ruleGroups.SPEED.score);
  console.log(data.pageStats);
});

// Output a formatted report to the terminal
psi.output('https://uitestkitchen.localtunnel.me').then(() => {
  console.log('done');
});

// Supply options to PSI and get back speed and usability scores
psi('theverge.com', {nokey: 'true', strategy: 'mobile'}).then(data => {
  console.log('Speed score:', data.ruleGroups.SPEED.score);
  console.log('Usability score:', data.ruleGroups.USABILITY.score);
});