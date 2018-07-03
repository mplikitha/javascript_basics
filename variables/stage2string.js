// 1
function drEvil(amount) {
    if (amount == 1000000) {
      console.log(amount + " dollars (pinky)");
    } else {
      console.log(amount + " dollars");
    }
  }
  drEvil(10);
  drEvil(1000000);

  // 2
  function mixUp(a, b) {
    console.log(b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2));
  }
  mixUp('mix', 'pod')
  mixUp('dog', 'dinner')

  // 3
  