import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}


//  {firstName: 'atmosphere-uktgs', lastName: 'cake-3avcu', age: 3, visits: 21, progress: 20, …}
// {firstName: 'mint-2mvld', lastName: 'ability-ylwmy', age: 12, visits: 89, progress: 68, …}
// {firstName: 'context-g3oc8', lastName: 'ship-k6as2', age: 17, visits: 4, progress: 94, …}
// {firstName: 'airport-c6xg1', lastName: 'gold-yvdwk', age: 21, visits: 0, progress: 53, …}
//  {firstName: 'chocolate-dw7j8', lastName: 'friction-8v4c5', age: 4, visits: 84, progress: 82, …}
// {firstName: 'application-exhvk', lastName: 'chairs-x982h', age: 16, visits: 73, progress: 13, …}
// {firstName: 'quince-h43mi', lastName: 'ground-3hgy7', age: 25, visits: 51, progress: 68, …}
//  {firstName: 'pail-9clvu', lastName: 'badge-3k6wz', age: 9, visits: 87, progress: 27, …}
//  {firstName: 'apples-h5ssl', lastName: 'marriage-0wydp', age: 13, visits: 89, progress: 48, …}
//  {firstName: 'volcano-fxbtx', lastName: 'condition-hnez8', age: 1, visits: 31, progress: 33, …}
//  {firstName: 'disease-oie5q', lastName: 'communication-dimza', age: 15, visits: 52, progress: 68, …}
//  {firstName: 'school-bbrr1', lastName: 'two-9u2qj', age: 7, visits: 44, progress: 93, …}
//  {firstName: 'sort-0ljhf', lastName: 'maintenance-2tyus', age: 19, visits: 49, progress: 87, …}
//  {firstName: 'population-fewwz', lastName: 'floor-duwy7', age: 15, visits: 17, progress: 52, …}
//  {firstName: 'ant-gt9lw', lastName: 'requirement-z4hse', age: 16, visits: 31, progress: 73, …}
//  {firstName: 'poem-lojhh', lastName: 'bear-cltn5', age: 3, visits: 10, progress: 13, …}
// {firstName: 'shade-8eyog', lastName: 'sort-aegih', age: 23, visits: 29, progress: 85, …}
//  {firstName: 'badge-z2vie', lastName: 'hook-hpw98', age: 13, visits: 85, progress: 9, …}
// {firstName: 'achieve-ef4r9', lastName: 'hands-v9ftm', age: 21, visits: 54, progress: 58, …}
// length: 20
// [[Prototype]]: Array(0)
