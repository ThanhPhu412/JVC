const totalLiters = 2;
  const glassSize = 0.25; // 250 ml
  let glassesDrank = 0;

  function updateStatus() {
    const litersRemained = totalLiters - glassesDrank * glassSize;
    const percentageDrank = (glassesDrank * glassSize) / totalLiters * 100;
    document.getElementById('water-remained').textContent = `${litersRemained.toFixed(2)}L Remained! - ${percentageDrank.toFixed(0)}%`;
  }

  function selectGlass(glass) {
    glassesDrank = glass.getAttribute('data-glass');
    updateStatus();
    document.querySelectorAll('.glass').forEach(g => g.classList.remove('selected'));
    glass.classList.add('selected');
  }

  window.onload = function() {
    for (let i = 1; i <= 8; i++) {
      const glass = document.createElement('div');
      glass.className = 'glass';
      glass.textContent = '250 ml';
      glass.setAttribute('data-glass', i);
      glass.onclick = function() { selectGlass(this); };
      document.getElementById('glasses').appendChild(glass);
    }
    updateStatus();
  };