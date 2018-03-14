const url = "http://localhost:3000/"
// let body
// let headers = {'Content-Type':'application/json','Accept':'application/json'}
// let config = {method:"POST",body:body,headers:headers}

export const compressedArray = (thing) => {
  let original = thing.map(item => {
  return Object.values(item['attachment']['name']).join()
})
  let compressed = []
  let copy = original.slice(0)

  for (let f = 0; f < original.length; f++) {
    let counter = 0

      for (let u = 0; u < copy.length; u++) {

        if (original[f]  === copy[u]) {
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

export const fetchParts = () => {
  return fetch(url + 'parts')
  .then(res => res.json())
  // .then(res => console.log(res))
}
export const fetchAttachments = (thing) => {
  return fetch(url + "attachments/" + `${thing}`)
  .then(res => res.json())
}
export const fetchSizes = () => {
  return fetch(url + "sizes")
  .then(res => res.json())
  .then(res => {
    console.log(res)
  })
}
export const fetchCarts = (item) => {
  let body = JSON.stringify(item)
  let headers = {'Content-Type':'application/json','Accept':'application/json'}
  let config = {method:"POST",body:body,headers:headers}

  return fetch(url + "get_carts",config)
  .then(res => res.json())
}

// export const updateCount = (item) => {
//   let body = {count: e.target.value}
//   let headers = {'Content-Type':'application/json','Accept':'application/json'}
//   let config = {method:"POST",body:body,headers:headers}
//
//   return fetch(url + 'carts' + '')
// }

export const hashItUp = (arr) => {
  arr.map(part => {
    console.log(part)
    return {key: part.description,text: part.description ,value: part.description}
  })
}

// export const = ()
