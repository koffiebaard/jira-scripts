// ==UserScript==
// @name        Commit comment
// @namespace   jira_commit_comment
// @description jira commit comment
// @include     *jira.*.nl/browse*
// @version     1
// @grant       none
// ==/UserScript==


var elem_issue_nr = document.getElementById('key-val');

if(elem_issue_nr && elem_issue_nr.text)
{
	var issue_nr = elem_issue_nr.text;
	var elem_issue_title_container = document.getElementById('issue_header_summary');
	var issue_title = elem_issue_title_container.children[0].text;

	var onclick = "javascript:var content = document.getElementById('cc'); content.focus(); content.select();";
	var style_ul = 'margin-right: 303px; background-color: #fff; position: fixed; top: 0px; right: 10px; z-index: 10000; border-radius: 0px 0px 10px 10px; background: -moz-linear-gradient(center top , #fff, #ededed) repeat scroll 0 0 transparent; padding: 10px; box-shadow: 2px 2px 2px #666';
	var style_li = 'list-style-type: none; padding: 5px; font-size: 15px; font-weight: bold';

    var elem_ul = document.createElement('div');
	elem_ul.innerHTML = '<ul id="commit_comment" style="' + style_ul + '"><li style="' + style_li + '">Commit Comment:</li><li style="list-style-type: none;"><input id="cc" type="text" size="50" value="[' + issue_nr + '] ' + issue_title + '" onclick="' + onclick + '"></li></ul>';

	document.body.appendChild(elem_ul);
}