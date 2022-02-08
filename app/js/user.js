$(function(){
  $(".user-side-button").on("click", ()=>{

    if($(".user-side-button").attr("src") == "images/icons/burger.svg"){
      $(".user-side-button").attr("src","images/icons/close_dark.svg")
    }else{
      $(".user-side-button").attr("src","images/icons/burger.svg")
    }

    $(".user__side-panel").slideToggle("slow",()=>{})
  })
})
