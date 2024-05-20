document.addEventListener('DOMContentLoaded', function () {
  let inputBox = document.querySelector('.input-box'),
    searchIcon = document.querySelector('.search'),
    closeIcon = document.querySelector('.close-icon');
  // ---- ---- Open Input ---- ---- //
  searchIcon.addEventListener('click', () => {
    inputBox.classList.add('open');
  });
  // ---- ---- Close Input ---- ---- //
  closeIcon.addEventListener('click', () => {
    inputBox.classList.remove('open');
  });
});

const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const rangeWidth = +getComputedStyle(e.target)
    .getPropertyValue("width")
    .slice(0, -2);
  const labelWidth = +getComputedStyle(label)
    .getPropertyValue("width")
    .slice(0, -2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    value * (rangeWidth / max) -
    labelWidth / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = left + "px";

  label.innerHTML = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

//range

// play/pause
function simpleAudioPlayer(playerID, anchorID) {
  let audioPlayer = document.getElementById(playerID);
  let anchor = document.getElementById(anchorID);
  //  alert('Clicked on ' + iID + ' link which is the ' + anchor.id + ' anchor');

  if (anchor.classList.contains("fa-play")) {
    //    alert('Playing...');
    anchor.classList.remove("fa-play");
    anchor.classList.add("fa-pause");
    audioPlayer.play();
  } else {
    anchor.classList.remove("fa-pause");
    anchor.classList.add("fa-play");
    audioPlayer.pause();
  }

  audioPlayer.onended = function () {
    //    alert('finished');
    anchor.classList.remove("fa-pause");
    anchor.classList.add("fa-play");
  };
}
// play/pause