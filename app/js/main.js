$(function ()
{
  $(".categories__button").on("click", ()=>{
    $(".categories__items").slideToggle("slow",()=>{
    })
  });
  $(".header__categories").mouseleave(()=>{
    $(".categories__items").slideUp("fast",()=>{})
  })
  $(".categories__items").mouseleave(()=>{
    $(".categories__items").slideUp("fast",()=>{})
  })

  for(const element of $(".category__item"))
  {
    $(element).mouseover(()=>{
      $(element.children[2]).slideDown("slow",()=>{})
    })

    $(element).mouseleave(()=>{
        $(element.children[2]).slideUp("fast",()=>{})
    })

    $(element.children[2]).mouseleave(()=>{
      $(element.children[2]).slideUp("fast",()=>{})
    })
  }

  $(".header__burger-button").on("click",()=>{
    $(".burger__item").fadeIn("fast",()=>{})
    $(".header__user").css("display","flex")
  })
  $(".close__button").on("click", ()=>{
    $(".burger__item").fadeOut("fast",()=>{})
  })
})
