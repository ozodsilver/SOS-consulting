
// 1 li
  $("#top .header-bottom li:first-child, #top .hover-content ").hover(
        function () {
          $("#top .hover-content").addClass("block");
        },
        function () {
          $("#top .hover-content").removeClass("block");
        }
      );

// 2 li
      
  $("#top .header-bottom li:nth-child(2), #top .hover-content2 ").hover(
        function () {
          $("#top .hover-content2").addClass("block");
        },
        function () {
          $("#top .hover-content2").removeClass("block");
        }
      );

    //   3li
       $("#top .header-bottom li:nth-child(3), #top .hover-content3 ").hover(
        function () {
          $("#top .hover-content3").addClass("block");
        },
        function () {
          $("#top .hover-content3").removeClass("block");
        }
      );
// 4 li
        $("#top .header-bottom li:nth-child(4), #top .hover-content4 ").hover(
        function () {
          $("#top .hover-content4").addClass("block");
        },
        function () {
          $("#top .hover-content4").removeClass("block");
        }
      );

    //   5 li

       $("#top .header-bottom li:nth-child(5), #top .hover-content5 ").hover(
        function () {
          $("#top .hover-content5").addClass("block");
        },
        function () {
          $("#top .hover-content5").removeClass("block");
        }
      );

    //   6 li

       $("#top .header-bottom li:nth-child(6), #top .hover-content6 ").hover(
        function () {
          $("#top .hover-content6").addClass("block");
        },
        function () {
          $("#top .hover-content6").removeClass("block");
        }
      );


// birinchi li ni  2 chi elamantiga hover bo'lganda


   $("#top #hoverRight, #top .horc1").hover(
        function () {
          $("#top .horc1, #top #hoverRight").addClass("block");
        },
        function () {
          $("#top .horc1").removeClass("block");
        }
      );



    //   birinchi lini ichidagi 5 li elementga bover bo'lganda
      

      $("#top #hoverRight2,#top .horc2 ").hover(
        function () {
          $("#top .horc2, #top #hoverRight2").addClass("block");
        },
        function () {
          $("#top .horc2").removeClass("block");
        }
      );



    //   2 chi lini ichidagi oxirgi elementga hover bo'lganda

    
      $("#top #hoverRight3,#top .horc3 ").hover(
        function () {
          $("#top .horc3, #top #hoverRight3").addClass("block");
        },
        function () {
          $("#top .horc3").removeClass("block");
        }
      );


    //   3 chi lini ichidagi oxirgi elementga hover bo'lganda
  $("#top #hoverRight4,#top .horc4 ").hover(
        function () {
          $("#top .horc4, #top #hoverRight4").addClass("block");
        },
        function () {
          $("#top .horc4").removeClass("block");
        }
      );



    //   iframega play qilish

    $( "#play" ).on( "click", function() {
 $('.frame').css({
    display: 'block'   
});

 $('#top').css({
    background:'black'  
});
});

    //   iframega exit qilish
  $( "#exit" ).on( "click", function() {
 $('.frame').css({
    display: 'none'
});
 $('#top').css({
     background:'url(./images/b-bg-header_index.png)',
     backgroundSize:'cover'
});

});




// validation

 function inputs() {
        let in1 = document.getElementById("in1").value.split('');
       if(in1.length < 3){
         document.getElementById('in1').classList.add('is-invalid')
          document.getElementById('in1').classList.remove('border-success','border-2')
         document.getElementById('invalid-text1').style.display = 'block'
       }
       else{
           document.getElementById('in1').classList.remove('is-invalid')
            document.getElementById('in1').classList.add('border-success','border-2')
            document.getElementById('invalid-text1').style.display = 'none'
       }
      }


       


$(document).ready(function(){
 
  $('#in2').keyup(function(uzb){
    var str = $('#in2').val();
    var regex = /^\s*(?:\+?(\d{1,3}))?[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d)[\W\D\s]*(\d[\W\D\s]*?\d[\D\W\s]*?\d[\W\D\s]*?\d)(?: *x(\d+))?\s*$/g;
    var result = str.match(regex);
   
    if(result !=null){
      
     $('#area').val(str.replace(result," xxxx "));
      document.getElementById('in2').classList.remove('is-invalid')
       document.getElementById('in2').classList.add('border-success', 'border-2')
      document.getElementById('invalid-text2').style.display = 'block'
       document.getElementById('invalidnum').style.display = 'none'
    }
    else{
      document.getElementById('in2').classList.add('is-invalid')
       document.getElementById('invalidnum').style.display = 'block'
         document.getElementById('invalid-text2').style.display = 'none'
          document.getElementById('in2').classList.remove('border-success', 'border-2')
    }
  });
 
});


// menyuni chiqarish


function menu(){
  
    document.querySelector('.menyuMobile').style.width = '90%'
  }

  // menyuni yopish

  
function menuClose(){
  
    document.querySelector('.menyuMobile').style.width = '0%'
  }



$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("#h-bottom").addClass("sticky");
      
    } else {
       
      $("#h-bottom").removeClass("sticky");
    }
});	