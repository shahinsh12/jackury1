// $(function(){
//     $('.hide').click(function(){
//         $('.box').slideUp(1000)
//     })

//     $(".show").click(function (){
//         $(".box").slideDown(200)
//     })
//     $(".toggle").click(function(){
//         $(".box").slideToggle(500)
//     })
// }) 

// menu start

$(function(){
    $(".menubtn").click(function(){
        $(".sidebar").addClass("active")
    })

    $(".menupart").click(function(){
        $(".sidebar").removeClass('active')
    })

   


})
// menu end




// inpot start


$(function(){
    $(".searchbtn").click(function(){
        $(".searcharea").addClass("active")
    })

    $(".cancelbtn").click(function(){
        $(".searcharea").removeClass('active');
    })
})

// input end