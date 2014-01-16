// ==UserScript==
// @name        Jira uren
// @namespace   jira_commit_comment
// @include     *jira.*/issues/*
// @version     1
// @grant       none
// ==/UserScript==


var elements = document.getElementsByClassName('timeestimate');
var hours = 0;

for (var c = 0; c < elements.length; c++)
{
    var item = elements[c];
    var time = item.innerHTML;
    
    if (time.indexOf("day") || time.indexOf("days"))
    {
        var regex = /([0-9]+) day[s]*/g;
        var results = regex.exec(time);
        
        if ( results !== null )
        {
            hours = hours + parseFloat(results[1] * 8);
        }
    }
    if (time.indexOf("hour") || time.indexOf("hours"))
    {
        var regex = /([0-9]+) hour[s]*/g;
        var results = regex.exec(time);
        
        if ( results !== null )
        {
            hours = hours + parseFloat(results[1]);
        }
    }
    if (time.indexOf("week") || time.indexOf("weeks"))
    {
        var regex = /([0-9]+) week[s]*/g;
        var results = regex.exec(time);
        
        if ( results !== null )
        {
            hours = hours + parseFloat(results[1] * 40);
        }
    }
    if (time.indexOf("minute") || time.indexOf("minutes"))
    {
        var regex = /([0-9]+) minute[s]*/g;
        var results = regex.exec(time);
        
        if ( results !== null )
        {
            hours = hours + parseFloat(results[1] / 60);
        }
    }
}

console.log(hours + " uur");
function appendHTML(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}

appendHTML(document.body, '<ul id="hour_estimate_woot" style="background-color: #fff; position: fixed; top: -12px; left: 575px; z-index: 10000; border-radius: 0px 0px 10px 10px; background: -moz-linear-gradient(center top , #fff, #ededed) repeat scroll 0 0 transparent; padding: 10px; box-shadow: 2px 2px 2px #666"><li style="list-style-type: none; padding: 5px; font-size: 15px; font-weight: bold">Uur aantal</li><li style="list-style-type: none; padding: 5px;">' + hours + '</li></ul>');

