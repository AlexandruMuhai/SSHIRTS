$(function(){

  $(".filter__button").on("click", function(){
    $(".side-panel").slideToggle("slow",()=>{

    })
  })
  $(".sort__button").on("click", function(){
    $(".sort__items").slideToggle("slow",()=>{})
  })
  $(".sort__items").mouseleave(function(){
    $(".sort__items").slideUp("slow",()=>{})
  })
  for(let item of $('.side-block'))
  {
    $(item.children[1]).css("display", "none");

    $(item.children[0]).on("click",()=>{
      $(item.children[1]).slideToggle("slow",()=>{
      })
    })
  }
})
