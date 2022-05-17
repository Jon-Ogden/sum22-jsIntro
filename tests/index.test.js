// test here
it('test datatypes',()=>{
  const pi = 3.14
  expect(pi).toBe(3.14)
  //numbers, strings, booleans: data types
 
  //objects {key:value, key:value} pairs
  let jeepWrangler = {make:'jeep', model:'wrangler', mileage:'165000'}
  expect (jeepWrangler.make).toBe('jeep')

  //arrays (lists) first entry is 0
  //arrays are ordered
  //use (arrayName).push to add to the end of an array
  let cars = ['Jeep', 'GTI', 'Rouge', 'Truck', 'Durango']

  expect(cars[0]).toBe('Jeep')
  expect(cars[4]).toBe('Truck')
  expect(cars.length).toBe(5)
  //to get last item in array use '(arrayName).lenth -1'
})