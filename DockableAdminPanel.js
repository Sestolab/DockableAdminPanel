$(function(){

	var DockAdminPanel = function(){
		var notifications = $('#simplepanel .admin-panel-notifications > a');
		if (gpui.tx <= 30 && gpui.ty <= 30 || $('html').hasClass('DockableAdminPanel')){
			$('html').toggleClass('DockableAdminPanel');
			notifications.attr({
				'href': !notifications.attr('href') ? gpBLink + '/Admin/Notifications?cmd=ShowNotifications' : null,
				'data-cmd': notifications.attr('data-cmd') !== 'gpabox' ? 'gpabox' : 'toplink'
			});
		}
	};

	$('document').ready(DockAdminPanel);
	$('#simplepanel').on('dragstop', DockAdminPanel);

});