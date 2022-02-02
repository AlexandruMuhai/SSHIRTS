$(function(){

  for(let item of $(".image-hover")){
    $(item).mouseover(function(){
      $(item.children[0]).fadeIn("fast",()=>{})
      $(item.children[1]).css("filter", "blur(3px)")
    })
    $(item).mouseleave(function(){
      $(item.children[0]).fadeOut("fast",()=>{})
      $(item.children[1]).css("filter", "blur(0)")
    })
  }
})
