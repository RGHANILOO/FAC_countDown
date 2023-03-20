function randomImage() {
    const bootcamp = [
      "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjQ0ODR8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcHxlbnwwfDB8fHwxNjc5MjU3NjIz&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjQ0ODR8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjBib290Y2FtcHxlbnwwfDB8fHwxNjc5MjU3NjIz&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjQ0ODR8MHwxfHNlYXJjaHwzfHxjb2RpbmclMjBib290Y2FtcHxlbnwwfDB8fHwxNjc5MjU3NjIz&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjQ0ODR8MHwxfHNlYXJjaHw0fHxjb2RpbmclMjBib290Y2FtcHxlbnwwfDB8fHwxNjc5MjU3NjIz&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjQ0ODR8MHwxfHNlYXJjaHw1fHxjb2RpbmclMjBib290Y2FtcHxlbnwwfDB8fHwxNjc5MjU3NjIz&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjQ0ODR8MHwxfHNlYXJjaHw2fHxjb2RpbmclMjBib290Y2FtcHxlbnwwfDB8fHwxNjc5MjU3NjIz&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1561347981-969c80cf4463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjQ0ODR8MHwxfHNlYXJjaHw3fHxjb2RpbmclMjBib290Y2FtcHxlbnwwfDB8fHwxNjc5MjU3NjIz&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1547860664-b8537ca5f833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjQ0ODR8MHwxfHNlYXJjaHw4fHxjb2RpbmclMjBib290Y2FtcHxlbnwwfDB8fHwxNjc5MjU3NjIz&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1580894896813-652ff5aa8146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjQ0ODR8MHwxfHNlYXJjaHw5fHxjb2RpbmclMjBib290Y2FtcHxlbnwwfDB8fHwxNjc5MjU3NjIz&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjQ0ODR8MHwxfHNlYXJjaHwxMHx8Y29kaW5nJTIwYm9vdGNhbXB8ZW58MHwwfHx8MTY3OTI1NzYyMw&ixlib=rb-4.0.3&q=80&w=1080"
    ];
    const randomIndex = Math.floor(Math.random() * bootcamp.length);
    document.getElementById("background").style.background = 'url(' + bootcamp[randomIndex] + ')';
  
  }
  
  function getRandomTime() {
          return 1000;
      // return Math.round(Math.random() * 5000);
  }
  
  (function loop() {
      setTimeout(function() {
        randomImage();
      loop();
    }, getRandomTime())
  })();