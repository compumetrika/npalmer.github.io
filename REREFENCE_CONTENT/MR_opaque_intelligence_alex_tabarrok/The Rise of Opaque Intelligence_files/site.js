jQuery(function () {
  var sidebar_container = jQuery("#sidebars");
  var content_container = jQuery("#content");
  var left_sidebar = jQuery("#sidebar_1");

  if (left_sidebar.height() > content_container.height()) {
    content_container.height(left_sidebar.height());
  }
});