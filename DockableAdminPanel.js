$(function(){

	var DockAdminPanel = function(){
		if (gpui.tx <= 30 && gpui.ty <= 30 || $('html').hasClass('DockableAdminPanel')){
			$('html').toggleClass('DockableAdminPanel');
		}
	};

	DockAdminPanel();
	$('#simplepanel').on('dragstop', DockAdminPanel);

	$(document).on('mousedown', '.DockableAdminPanel #simplepanel .admin-panel-notifications > a', function(){
		$(this).next().find('.expand_child a').first().click();
	});

});