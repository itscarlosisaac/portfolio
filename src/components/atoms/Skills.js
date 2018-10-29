// Create skills canvas component

function Skills(container) {

  const canvas = document.querySelector(container);
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 780;

  const mouse = {
    x: undefined,
    y: undefined,
  };

  window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  const canvasBG = ctx.createLinearGradient(canvas.width, 0, 0, canvas.height);
  canvasBG.addColorStop(0, '#FFB14F');
  canvasBG.addColorStop(0.5, '#E9916F');
  canvasBG.addColorStop(1, '#F38498');
  ctx.fillStyle = canvasBG;
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  function Skill(x, y, radius, text) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.text = text;
    this.hovered = false;

    this.draw = () => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.font = '500 24px Lato';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(text, this.x - 12, this.y + 12);
    };

    this.toggleHover = () => { this.hovered = !this.hovered; };

    this.update = () => {
      this.draw();
      this.collide();
    };

    this.createHover = (t) => {
      ctx.fillStyle = 'blue';
      ctx.fillRect(this.x + this.radius + 30, this.y - (this.radius / 2), 100, 100);
      this.toggleHover();
    };

    this.removeHover = () => {
      this.toggleHover();
      ctx.clearRect(this.x + this.radius + 30, this.y - (this.radius / 2), 100, 100);
    };

    this.collide = () => {
      if (
        mouse.x - this.x < 100
        && mouse.x - this.x > -100
        && mouse.y - this.y < 100
        && mouse.y - this.y > -100
      ) {
        this.createHover(this.text);
        // console.log(this.text)
      } else {
        if (this.hovered) { this.removeHover(); };
      }
    };

  }

  const SkillsArray = [];

  SkillsArray.push(new Skill(400, 400, 100, 'PS'));
  SkillsArray.push(new Skill(200, 200, 100, 'ID'));

  function Animation() {
    requestAnimationFrame(Animation);

    for (let i = 0; i < SkillsArray.length; i++) {
      SkillsArray[i].update();
    }
  }

  Animation();
}

export default Skills;
