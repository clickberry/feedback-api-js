(function(window, $) {
  
  if (!$) {
    return console.error('jQuery required.');
  }

  var clbr = window.clbr = window.clbr || {};

  clbr.feedbackApi = function (url) {
    return {
      // Sends feedback
      post: function (email, name, comment, fn) {
        $.ajax({
            url: url,
            type: 'POST',
            data: {email: email, name: name, comment: comment}
          })
          .done(function() {
            fn();
          })
          .fail(function(jqXHR, textStatus, err) {
            fn(err);
          });
      }
    };
  };

})(window, window.jQuery);