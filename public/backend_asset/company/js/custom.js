$("#showPDF").click(function(){
  $(".pdfFile, .RecordTextUploaded").show();
  $(".noRecordImage, .noRecordBlockText").hide();
}); 

function printDiv() {
 window.frames["print_frame"].document.body.innerHTML = document.getElementById("printableTable").innerHTML;
 window.frames["print_frame"].window.focus();
 window.frames["print_frame"].window.print();
}

 $(function() {
    $('#frequency_filter').change(function(){
        $('.frequency_selct').hide()
        $('#'+ $(this).val()).show();
    });
});

 $('input[type="radio"]').click(function(){
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".dayDateSelect").not(targetBox).hide();
    $(targetBox).show();
});