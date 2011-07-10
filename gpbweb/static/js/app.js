// format integer
var pad = function(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
};

$(document).ready(function() {
                      var appendRow = function(data, tr) {
                          tr.after('<tr class="detalle"><td colspan="' + $('td', tr).length + '">' + $('#detalle_template').jqote(data) + '</td></tr>');
			  tr.effect("highlight", {}, 1500);
                      };

		      $('tr.orden a').click(function(e){
						e.preventDefault();
		      });
		      
		      $('tr.orden').click(function(e) {
					      e.stopPropagation();
					      var tr = $(this);
					      if (tr.hasClass('seleccionada')) 
						  return;
					      tr.addClass('seleccionada');
					      $.getJSON($($('a', tr)[2]).attr('href') + 'json', 
							    function(data) { 
								tr.after('<tr class="detalle"><td colspan="' + $('td', tr).length + '">' + $('#detalle_template').jqote(data) + '</td></tr>');
							    });
					      });
});
