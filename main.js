setInterval(
    
    function(){
        var selecta = document.querySelectorAll('select');
        
        document.getElementById("flex-container").style.flexDirection = selecta[0].value;
        document.getElementById("flex-container").style.flexWrap = selecta[1].value;
        document.getElementById("flex-container").style.justifyContent = selecta[2].value;
        document.getElementById("flex-container").style.alignItems = selecta[3].value;
        document.getElementById("flex-container").style.alignContent = selecta[4].value;
    
        document.getElementById("flex-item").style.alignSelf = selecta[5].value;
        document.getElementById("flex-item").style.order = selecta[6].value;
        document.getElementById("flex-item").style.flexGrow = selecta[7].value;
        document.getElementById("flex-item").style.flexShrink = selecta[8].value;
        document.getElementById("flex-item").style.flexBasis = selecta[9].value;
    }
    , 100);