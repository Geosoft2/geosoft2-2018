remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

remark.macros.inline_highlight = function () {
  var word = this;
  return '<span class="inline_highlight">' + word + '</span>';
};
