import Skills from '../../data/skills';

const concatSkills = [
  ...Skills.laguages,
  ...Skills.frameworks,
  ...Skills.tools,
  ...Skills.abilities,
];

function scaleByYears(exp) {
  let scale;
  switch (exp) {
    case 1:
      scale = 0.7;
      break;
    case 2:
      scale = 0.75;
      break;
    case 3:
      scale = 0.8;
      break;
    case 4:
      scale = 0.9;
      break;
    default:
      scale = 1;
      break;
  }
  return scale;
}

// function CreateHover(container, s, exp) {
//   const svgns = 'http://www.w3.org/2000/svg';
//   const rect = document.createElementNS(svgns, 'rect');
//   const g = document.createElementNS(svgns, 'g');

//   g.setAttribute('transform', 'translate(70, -35)');
//   rect.setAttributeNS(null, 'x', 0);
//   rect.setAttributeNS(null, 'y', 0);
//   rect.setAttributeNS(null, 'width', 150);
//   rect.setAttributeNS(null, 'height', 70);
//   rect.setAttributeNS(null, 'rx', 6);
//   rect.setAttributeNS(null, 'ry', 6);
//   rect.setAttributeNS(null, 'style', 'fill: #f3f3f3; ');

//   // Create Text

//   const skill = document.createElementNS(svgns, 'text');
//   skill.setAttributeNS(null, 'x', 15);
//   skill.setAttributeNS(null, 'y', 30);
//   skill.setAttributeNS(null, 'style', 'font: bold 16px Lato; fill: #4D56A5; ');
//   skill.appendChild(document.createTextNode(s));

//   const years = document.createElementNS(svgns, 'text');
//   years.setAttributeNS(null, 'x', 15);
//   years.setAttributeNS(null, 'y', 50);
//   years.setAttributeNS(null, 'style', 'font: bold 12px Lato; fill: #171717; ');
//   years.appendChild(document.createTextNode(`${exp} Years of experience`));

//   g.setAttribute('id', 'app__skill__hover');
//   g.appendChild(rect);
//   g.appendChild(skill);
//   g.appendChild(years);
//   container.appendChild(g);
// }

function CreateSkill(data, container) {
  this.svgns = 'http://www.w3.org/2000/svg';
  const { exp, skill, pos } = data;

  this.createText = () => {
    this.text = document.createElementNS(this.svgns, 'text');
    this.text.setAttributeNS(null, 'text-anchor', 'middle');
    this.text.setAttributeNS(null, 'dominant-baseline', 'middle');
    this.text.setAttributeNS(null, 'x', 0);
    this.text.setAttributeNS(null, 'y', 0);
    this.text.setAttributeNS(null, 'style', 'font: bold 16px Lato; fill: white; ');
    this.text.appendChild(document.createTextNode(skill));
    return this.text;
  };

  this.createCircle = () => {
    this.circle = document.createElementNS(this.svgns, 'circle');
    this.circle.setAttributeNS(null, 'cx', 0);
    this.circle.setAttributeNS(null, 'cy', 0);
    this.circle.setAttributeNS(null, 'r', 50);
    this.circle.setAttributeNS(null, 'style', 'fill: rgba(255,255,255,0.24); stroke: white; stroke-width: 2;');
    return this.circle;
  };

  this.createGroup = () => {
    this.g = document.createElementNS(this.svgns, 'g');
    const scale = scaleByYears(exp);
    this.g.setAttribute('transform', `translate(${pos.x}, ${pos.y}), scale(${scale})`);
    this.g.appendChild(this.createCircle());
    this.g.appendChild(this.createText());
    this.addHover();
    container.appendChild(this.g);
  };

  this.addHover = () => {
    this.g.addEventListener('mouseover', () => {
      this.circle.setAttributeNS(null, 'style', 'fill: rgba(255,255,255,1); stroke: white; stroke-width: 2;');
      this.text.setAttributeNS(null, 'style', 'font: bold 16px Lato; fill: #4D56A5; ');
      // CreateHover(this.g, skill, exp);
    });
    this.g.addEventListener('mouseout', () => {
      this.circle.setAttributeNS(null, 'style', 'fill: rgba(255,255,255,0.24); stroke: white; stroke-width: 2;');
      this.text.setAttributeNS(null, 'style', 'font: bold 16px Lato; fill: white; ');
      // document.querySelector('#app__skill__hover').remove();
    });
  };

  this.createGroup();
}

// const SVGHelper = {
//   setAttrNS: (e) => {
//     // e.setAttributeNS(null, )
//   },
// };

// Create skills canvas component
function SkillsSVG(container) {
  this.SVG = document.querySelector(container);
  for (let i = 0; i < concatSkills.length; i++) {
    new CreateSkill(concatSkills[i], this.SVG);
  }
}

export default SkillsSVG;
