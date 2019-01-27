$(.card-header).click(function(e) {
    that = $(this)
    accordian = that.siblings(.card-body)
    $(.card-body).not(accordian).collapse('hide')
    accordian.collapse('toggle')
  })

  $(.card-body).collapse('hide')