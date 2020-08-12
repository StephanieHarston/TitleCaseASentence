function titleCase(str) {
  let arr = str.toLowerCase().split(' ')
  let newString = []
  for(let i = 0; i < arr.length; i++) {
   newString.push(arr[i].charAt(0).toUpperCase() + arr[i]. slice(1))
  }
  return newString.join(' ')
}


titleCase("I'm a little tea pot");


