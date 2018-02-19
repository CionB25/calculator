

export const compressedArray = (thing) => {
  let original = thing.map(item => {
  return Object.values(item['attachment']['name']).join()
})
  let compressed = []
  let copy = original.slice(0)

  for (let f = 0; f < original.length; f++) {
    let counter = 0

      for (let u = 0; u < copy.length; u++) {

        if (original[f]  == copy[u]) {
          counter++;
          delete copy[u]
        }
      }
      if (counter > 0) {
        let a = {}
        let comma = /,/gi;
        let noComma = original[f].replace(comma,"");
        a.value = noComma;
        a.count = counter;
        compressed.push(a)
      }
  }
  return compressed;
}

export const filteredArray = (arr1, arr2) => {
  let filtered = []

  for (let i = 0; i < arr2.length; i++) {
    arr1.find(item => {
      if (item.attachment.name === arr2[i]['value']) {
        console.log(item.attachment.name)
        console.log(arr2[i]['value'])
        let tableObj = [item,arr2[i]]
        return filtered.push(tableObj)
      }
    })
    // filtered.push(arr2[i]['value'])
  }
  return filtered
}

// export const = ()
