function getDeviceType(){
    
    let device_type = $('#device_type option:selected').map(function(i,el){
        return $(el).val();
      }).get();

    return device_type;
}

function getCaptureType(){
    let capture_type = $('#capture_type :selected').map(function(i,el){
            
        return $(el).val();
    }).get();

    return capture_type;
}


function getAreaType(){
    
   let area_type =$('#device_area_type option:selected').map(function(i,el){
       console.log(el);
        return $(el).val();
      }).get();

    return area_type  ;

}

function getEvidenceType(){
    let evidence_type = $('#evidence_type option:selected').map(function(i,el){
        return $(el).val();
      }).get();

    return evidence_type  ;
}