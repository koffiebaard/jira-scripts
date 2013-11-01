// ==UserScript==
// @name        Commit comment
// @namespace   jira_commit_comment
// @description jira commit comment
// @include     *jira.*.nl/browse*
// @version     1
// @grant       none
// ==/UserScript==


var elem_issue_nr = document.getElementById('key-val');

if(elem_issue_nr)
{
    var issue_nr = elem_issue_nr.text;
    
    var elem_issue_title_container = document.getElementById('issue_header_summary');
    var issue_title = elem_issue_title_container.children[0].text;
    console.log("whoop");
    var elem_ul = document.createElement('div');
    elem_ul.innerHTML = '<ul id="commit_comment" style="margin-right: 303px; background-color: #fff; position: fixed; top: 0px; right: 10px; z-index: 10000; border-radius: 0px 0px 10px 10px; background: -moz-linear-gradient(center top , #fff, #ededed) repeat scroll 0 0 transparent; padding: 10px; box-shadow: 2px 2px 2px #666"><li style="list-style-type: none; padding: 5px; font-size: 15px; font-weight: bold">commit comment</li><li style="list-style-type: none;">[' + issue_nr + '] ' + issue_title + '</li></ul>';
    
    document.body.appendChild(elem_ul);
}