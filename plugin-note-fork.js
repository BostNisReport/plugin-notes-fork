
function view_plugin_note(pluginmane ) {
	
	jQuery('.mynot'+pluginmane).css({'height':'100%'});
	jQuery('a#wp-plugin_note_view'+pluginmane).css({'display':'none'});
	jQuery('a#wp-plugin_note_hide'+pluginmane).css({'display':''});
}
function hide_plugin_note(pluginmane ) {
	
	jQuery('.mynot'+pluginmane).css({'height':'42px'});
	jQuery('a#wp-plugin_note_view'+pluginmane).css({'display':''});
	jQuery('a#wp-plugin_note_hide'+pluginmane).css({'display':'none'});
} 


