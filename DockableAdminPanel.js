$(function(){

	var DockAdminPanel = function(){
		var notifications = $('#simplepanel .admin-panel-notifications > a');
		if (gpui.tx <= 30 && gpui.ty <= 30 || $('html').hasClass('DockableAdminPanel')){
			$('html').toggleClass('DockableAdminPanel');
			notifications.attr({
				'href': !notifications.attr('href') ? 
						notifications.parent().find('.expand_child > a').first().attr('href')
						: null,
				'data-cmd': notifications.attr('data-cmd') !== 'gpabox' ? 'gpabox' : 'toplink'
			});
		}
	};

	$('document').ready(DockAdminPanel);
	$('#simplepanel').on('dragstop', DockAdminPanel);

});
