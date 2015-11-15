 $(document).ready(function() {
   
    var albumId;
    var prevAlbum;
    var opened = false;
    
  	$('body').attr("style", "opacity:1");
    setResponsiveHeight('.album-logo');
    
  	$(window).unload(function() {
  		$('body').attr("style", "opacity:0.5");
  	});
    $(document).on("click", ".album-link", function(callback){

      albumId = "#" + $(this).attr('id') + "-album";
      $("#albums").load("albums/" + $(this).attr('id') + ".htm");
      opened = true;
      var body = $('body');
      body.css('overflow-y', 'hidden');
     
      setTimeout(function(){
        console.log(2); 
        $(".colorbox-item").colorbox({rel:'colorbox-item', transition:"fade", height:"90%"});
        $(albumId).addClass("opened");
       
       setResponsiveHeight('.album-photo');
      },1000);


      // var id = $(this).attr('id');

      // loadAlbum(addClasses, id);
      
    });

    function setResponsiveHeight(className) {
       var div = $(className);
        var width = div.width();

        div.css('height', width);
    }

    function loadAlbum(callback, id) {
      albumId = "#" + id + "-album";
      $("#albums").load("albums/" + id + ".htm");
      opened = true;

      callback(albumId);
    }

    function addClasses(albumId) {
       $(".colorbox-item").colorbox({rel:'colorbox-item', transition:"fade", height:"90%"});
        $(albumId).addClass("opened");
      };


    $(document).on("click", ".portfolio-link", function(){
      $(albumId).removeClass("opened");
      var body = $('body');
      body.css('overflow-y', 'scroll');
       opened = false;
    });

    // if(opened) {
    //   if($(albumId).scrollTop() === 0) {
    //     $(".scroll-top-arrow").hide();
    //   } else {
    //     // alert("not 0");
    //     $(".scroll-top-arrow").show();
    //   }
    // }

    $(document).on("scroll", document.body, function(){
      // alert("scroll");

       // var div = $(albumId);
       //  if ($(albumId).scrollTop() === 423)
       //  {
       //      alert("Reached the bottom!");
       //  }
       //  else if($(albumId).scrollTop() == 0)
       //  {
       //      alert("Reached the top!");
       //  }
    });

    // $(albumId).scroll(function() {
    //    alert("scroll");
    // });

    // $(albumId).scroll(function () {

    //     if ($(window).scrollTop() + $(window).height() > $(albumId).offset().top) {
    //         alert("footer visible");
    //     } else {
    //         alert("footer invisible");
    //     }
    // });



// $('.overpage').scroll(function (event) {
//     var scroll = $(albumId).scrollTop();
//     alert(scroll);

// });



    // $(albumId).scroll(function()
    // {
    //     var div = $(albumId);
    //     if (div[0].scrollHeight - div.scrollTop() == div.height())
    //     {
    //         alert("Reached the bottom!");
    //     }
    //     else if(div.scrollTop() == 0)
    //     {
    //         alert("Reached the top!");
    //     }
    // });

  $(document).on("click", ".scroll-top-arrow", function(){
      $(albumId).animate({ scrollTop: 0 }, "slow");
      return false;
      });

  });