import orderByProperties from './sortProperties';

// task 1
const hero = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
const res = orderByProperties(hero, ['name', 'level']);
console.log(res);
