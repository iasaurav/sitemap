var source='e2:e';
 var id='1n5RSc9jnxqKr_rcfCZ1Uci90CApBl0y2BDn_WHs8W8A';
var gid = '1747076936';

var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid+'&single=true&range='+source;
fetch(url)
  .then(response => response.text())
  .then(data => document.getElementById("json").innerHTML=myItems(data.slice(47, -2))  
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
var table = "</br></br><table id='custom'><thead><tr><th>Date</th><th>Name</th></tr></thead><tbody id='myTable'>"
 json.table.cols.forEach(colonne => table += '' + colonne.label + "")
  table += ''
  json.table.rows.forEach(ligne => {
    table += ''
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.f : cellule.v}
        catch(e){var valeur = ''}
        table += "" + valeur + ""
      }
    )
    table += ''
    }
  )
  table += '</table>'
  return table
}