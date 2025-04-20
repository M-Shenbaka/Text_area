var txtarea = document.getElementById("txtarea");
var count = document.getElementById("count");
var warning = document.querySelector(".warning");
var maxChar = 200;

txtarea.addEventListener("input",function()
{
  let txtLength = txtarea.value.length
  if(txtLength > maxChar)
  {
    /* prevent further typing */
    txtarea.value = txtarea.value.substring(0,maxChar)
    /* Update the length after trimming*/
    txtLength = maxChar
    warning.textContent = "Character limit reached!";
  }
  else
  {
    warning.textContent = "";
  }
  count.textContent = `${txtLength}/${maxChar} characters(${maxChar - txtLength} remaining)`
})

