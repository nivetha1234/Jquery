/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
$("img").click(function(){
    $(this).animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
  });
});
