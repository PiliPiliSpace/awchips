let handsontableContainer = document.getElementById('handsontable-container')
let url = "https://pilipili.space/awchips/data/SUNXI_CHIP.csv"


setTimeout(function () {
  Papa.parse(url, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      // reset container
      handsontableContainer.innerHTML = ''
      handsontableContainer.className = ''

      Handsontable(handsontableContainer, {
        data: results.data,
        rowHeaders: true,
        colHeaders: results.meta.fields,
        columnSorting: true,
        filters: true,
        dropdownMenu: true,
        width: '100%',
        licenseKey: 'non-commercial-and-evaluation',
      })
    }
  })
}, 500)
