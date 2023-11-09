document.addEventListener("DOMContentLoaded", function () {
  var videoPlayer = document.getElementById("video");
  var powerButton = document.getElementById("power");
  var muteButton = document.getElementById("mute");
  var digitButtons = document.querySelectorAll(".digit");
  var btnBigInnerAfterButton = document.querySelector(".btn-big-inner-after");
  var btnBigInnerBeforeButton = document.querySelector(".btn-big-inner-before");
  var btnBigAfterButton = document.querySelector(".btn-big-after");
  var btnBigBeforeButton = document.querySelector(".btn-big-before");


  // Define an array of channel URLs and associated numbers
  var channels = [
    { number: "1", url: "https://www.youtube.com/embed/dVYl5ImNjow?enablejsapi=1&html5=1?&showinfo=0&controls=0" },
    { number: "2", url: "https://www.youtube.com/embed/3176Sw8A0EE?enablejsapi=1&html5=1?&showinfo=0&controls=0" },
    { number: "3", url: "https://www.youtube.com/embed/6stlCkUDG_s?enablejsapi=1&html5=1?&showinfo=0&controls=0" },
    { number: "4", url: "https://www.youtube.com/embed/RK1RRVR9A2g?enablejsapi=1&html5=1?&showinfo=0&controls=0" },
    { number: "5", url: "https://www.youtube.com/embed/HHBsvKnCkwI?enablejsapi=1&html5=1?&showinfo=0&controls=0" },
    { number: "6", url: "https://www.youtube.com/embed/RvreULjnzFo?enablejsapi=1&html5=1?&showinfo=0&controls=0" },
    { number: "7", url: "https://www.youtube.com/embed/gsnqXt7d1mU?enablejsapi=1&html5=1?&showinfo=0&controls=0" },
    { number: "8", url: "https://www.youtube.com/embed/ZjbFDYoE-OY?enablejsapi=1&html5=1?&showinfo=0&controls=0" },
    { number: "9", url: "https://www.youtube.com/embed/oe70Uhjc_F4?enablejsapi=1&html5=1?&showinfo=0&controls=0" }
  ];

  var currentChannel = 0; // Initialize with the first channel

  powerButton.addEventListener("click", function () {
    videoPlayer.classList.toggle('screen-off');
  });

  muteButton.addEventListener("click", function () {
    if (videoPlayer.muted) {
      videoPlayer.muted = false;
      console.log('Unmuted');
    } else {
      videoPlayer.muted = true;
      console.log('Muted');
    }
  });

  function loadChannel(channelIndex) {
    if (channelIndex >= 0 && channelIndex < channels.length) {
      videoPlayer.src = channels[channelIndex].url;
      currentChannel = channelIndex;
    }
  }

  digitButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var digit = button.getAttribute("data-digit");
      var channel = channels.find((ch) => ch.number === digit);
      if (channel) {
        loadChannel(channels.indexOf(channel));
      }
    });
  });

 // Função para diminuir o volume
 function decreaseVolume() {
  if (videoPlayer.volume > 0.0) {
    videoPlayer.volume -= 0.1; // Diminui o volume em 10%
    console.log('Volume diminuído');
  }
}

btnBigInnerAfterButton.addEventListener("click", function () {
  currentChannel = (currentChannel + 1) % channels.length;
  loadChannel(currentChannel);
});

btnBigInnerBeforeButton.addEventListener("click", function () {
  currentChannel = (currentChannel - 1 + channels.length) % channels.length;
  loadChannel(currentChannel);
});


btnBigAfterButton.addEventListener("click", increaseVolume);
btnBigBeforeButton.addEventListener("click", decreaseVolume);
});






