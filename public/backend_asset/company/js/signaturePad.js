var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
    backgroundColor: 'white',
    penColor: 'black'
  });
  var saveButton = document.getElementById('save-sign');
  var cancelButton = document.getElementById('clear');
  
  // saveButton.addEventListener('click', function (event) {
  //   var data = signaturePad.toDataURL('image/png');
  
  // // Send data to server instead...
  //   window.open(data);
  // });
  
  cancelButton.addEventListener('click', function (event) {
    signaturePad.clear();
  });

//diagram
// var diagramPad = new SignaturePad(document.getElementById('signature-pad-diagram'), {
//     backgroundColor: 'rgba(255, 255, 255, 0)',
//     penColor: 'green'
//   });
//   var saveDiagram = document.getElementById('save-diagram');
//   var cancelDiagram = document.getElementById('clear-diagram');
//   saveDiagram.addEventListener('click', function (event) {
//     var data = diagramPad.toDataURL('image/png');
  
//   // Send data to server instead...
//     window.open(data);
//   });
  
//   cancelDiagram.addEventListener('click', function (event) {
//     diagramPad.clear();
//   });
