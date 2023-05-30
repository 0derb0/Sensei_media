let openorclose = 'flex';
let autoOrZero = 'auto'

function senseInDesighButton(){
    document.getElementById('open_cards').style.display = openorclose;
    document.getElementById('open_cards').style.maxHeight = '700px';
    // document.getElementsByClassName('sense_in_desigh').style.maxHeight = autoOrZero;
    if (openorclose == 'flex') {
        openorclose = 'none'
    } else if (openorclose == 'none') {
        openorclose = 'flex'
    }
    if (autoOrZero == 'auto') {
        autoOrZero = '0'
    }else if (autoOrZero == '0') {
        autoOrZero = 'auto'
    }
   
}