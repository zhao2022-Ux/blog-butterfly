'use strict';

function postTimeline(args, content) {
  if (args.length > 0) {
    return `<div class="timelines-common"><fieldset class="elem-field field-title"><legend>${args}</legend></fieldset><ul class="timeline">${content}</ul></div>`;
  }
  return `<div class="timelines-common"><ul class="timeline">${content}</ul></div>`;

}

function postTimenode(args, content) {
  args = args.join(' ').split(',');
  var time = args[0];
  return `<li class="timeline-item"> <i class="${args} timeline-axis"></i><div class="timeline-content timeline-content-text"><div class="timeline-title">${content}</div></div></li>`;
}


// {% timelines %}
// ... timenode ...
// {% endtimelines %}
hexo.extend.tag.register('timelines', postTimeline, {ends: true});

// {% timenodes time %}
// what happened
// {% endtimenodes %}
hexo.extend.tag.register('timenodes', postTimenode, {ends: true});
