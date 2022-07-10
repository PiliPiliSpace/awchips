let handsontableContainer = document.getElementById('handsontable-container')


let file = this.files[0]
let reader = new FileReader()

reader.onload = function (e) {
  let csv = e.target.result
  let data = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true
  })

  // reset container
  handsontableContainer.innerHTML = ''
  handsontableContainer.className = ''
  document.querySelector('input').remove()

  Handsontable(handsontableContainer, {
    data: data.data,
    rowHeaders: true,
    colHeaders: data.meta.fields,
    columnSorting: true,
    width: '100%',
    licenseKey: 'non-commercial-and-evaluation',
  })
}

file && reader.readAsText(file)
