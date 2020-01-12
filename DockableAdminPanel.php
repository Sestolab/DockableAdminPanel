<?php

defined('is_running') or die('Not an entry point...');


class DockableAdminPanel{
	static function GetHead(){
		global $page;
		if(\gp\tool::LoggedIn() && $page->title){
			\gp\tool\Plugins::css('DockableAdminPanel.scss', false);
			\gp\tool\Plugins::js('DockableAdminPanel.js', false);
		}
	}
}
?>
