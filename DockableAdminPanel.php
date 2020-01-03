<?php

defined('is_running') or die('Not an entry point...');


class DockableAdminPanel{
	static function GetHead(){
		if(\gp\tool::LoggedIn()){
			\gp\tool\Plugins::css('DockableAdminPanel.scss', false);
			\gp\tool\Plugins::js('DockableAdminPanel.js', false);
		}
	}
}
?>
