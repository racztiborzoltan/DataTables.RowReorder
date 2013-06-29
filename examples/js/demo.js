$(document).ready(function () {
	
	// Load example table:
	var $example_table_wrapper = $('div.example-table-wrapper');
	if ($example_table_wrapper.length)
		$.ajax({
			async: false,
			url: 'examples/snippets/test_table.html',
			success: function(response){ $example_table_wrapper.html( response ); },
			dataType: 'html'
		});
	
	// Load example link list:
	var $other_example_links = $('#other_example_links');
	if ($other_example_links.length)
		$.ajax({
			async: false,
			url: 'examples/snippets/other_example_links.html',
			success: function(response){ $other_example_links.html( response ); },
			dataType: 'html'
		});
		
	// Load footer content:
	var $footer = $('#fw_footer, #footer');
	if ($footer.length)
		$.ajax({
			async: false,
			url: 'examples/snippets/footer.html',
			success: function(response){ $footer.html( response ); },
			dataType: 'html'
		});
	
	
	// --------------------------------------
	// Redefine some default Datatables config:
	//
	var example_datatable_settings = {
		"sPaginationType": "full_numbers",
	};
	example_datatable_settings.bJQueryUI = jQuery.ui ? true : false;
		
	$.extend(true, $.fn.dataTable.defaults, example_datatable_settings);
	// --------------------------------------
	
	// --------------------------------------
	// Reformat the content of <pre> tags:
	// 
	$('pre').each(function(i,e){
		$pre = $(this);
		var lines = $(this).html().split("\n");
		var min_leading_tab_count = 1000;
		for(i=0; i<lines.length; i++)
		{
			var matches = lines[i].match(/^(\t+)( |\S)/);
			var temp = matches === null ? 1000 : matches[1].length;
			if (temp < min_leading_tab_count) min_leading_tab_count = temp;
		}
		for(i=0; i<lines.length; i++)
		{
			lines[i] = lines[i].replace(new RegExp('^\t{0,'+min_leading_tab_count+'}'), '');
		}
		$pre.html(lines.join("\n"));
	});
	// --------------------------------------
	
});
