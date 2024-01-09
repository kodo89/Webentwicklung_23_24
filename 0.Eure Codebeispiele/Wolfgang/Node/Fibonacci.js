import fibonacci from 'fibonacci'

fibonacci.on ('result', num => {
    console.log (`  ${num.number}\n`);
  
    if (num.iterations > 10) {
      console.log ('Done!');
      fibonacci.kill();
    }
  });
  
  // run this AFTER everything
  console.log(fibonacci.iterate());
