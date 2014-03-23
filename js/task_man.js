

function additem(list_num,description_box_id)
{
//list_num gives the list no. to which item has to be added

//description_box_id gives the id of the description box which contains the new desc

//get the description for the new item 
var desc=document.getElementById(description_box_id).value;

if(desc==null ||desc=="")
{
alert("enter a decription");
return false;
}
//reset desc box to null
document.getElementById(description_box_id).value="";



var num;

//getting no. of items in the list

var count = document.querySelectorAll("#"+list_num+" > li").length;
//alert(count);

//add the item as count+1 th item in the list
 num=count+1;
 
 //creating new item in the list
 var item_to_be_added = document.createElement('li');

  var item_id = list_num+num;
//alert(item_id);
  item_to_be_added.setAttribute('id',item_id);

  item_to_be_added.innerHTML = desc;

  
  
  //creating edit button for the new item in the list
  var edit_button_id=item_id+'_edit';
  
  var edit_button= document.createElement("input");
 edit_button.setAttribute("type", "button");
 edit_button.setAttribute('id',edit_button_id);
edit_button.setAttribute('value','edit');
edit_button.onclick = function() {
    edititem(item_id);
};
  
  
  
  //creating delete button for the new item in the list
  var del_button_id=item_id+'_del';
  
  var del_button= document.createElement("input");
 del_button.setAttribute("type", "button");
 del_button.setAttribute('id',del_button_id);
del_button.setAttribute('value','delete');
del_button.onclick = function() {
    deleteitem(item_id,del_button_id,edit_button_id,list_num);
};
  
  
  
  var append_id = document.getElementById(list_num);
//alert(append_id);
  //adding to the list
  append_id.appendChild(item_to_be_added);
  append_id.appendChild(del_button);
 append_id.appendChild(edit_button);
 
 
  }
 
 
 
 function deleteitem(item_id,del_button_id,edit_button_id,list_num)
 {
 
 
 var list = document.getElementById(list_num);
//getting the id of the item,and the id of its delete and edit buttons
  var to_delete_item = document.getElementById(item_id);
  
  var to_delete_button = document.getElementById(del_button_id);

   var to_edit_button = document.getElementById(edit_button_id);

  //remove item
  list.removeChild(to_delete_item);
 //remove delete button for that item
 list.removeChild(to_delete_button);
 //remove edit button
  list.removeChild(to_edit_button);

 }
 
 
 function edititem(item_id)
 {
 //get new description
 var new_desc=prompt("Please enter new description");
 
 //replace the old decs by new desc
 if(new_desc==null ||new_desc=="")
{
return false;
}

 document.getElementById(item_id).innerHTML=new_desc;

 
}






//function to add new list
function addlist()
{

var list_name=document.getElementById('add_list').value;

if(list_name==null ||list_name=="")
{
alert("enter a list name");
return false;
}
//reset add list box to null
document.getElementById('add_list').value="";
//alert(list_name);

//getting no. of divs(1 div for 1 list) in the page

var count = document.querySelectorAll("body > div").length;
//alert(count);

 num=count+1;
 //creating new div
 var newdiv = document.createElement('div');
  var item_id = num+"_list";
//alert(item_id);
  newdiv.setAttribute('id',item_id);

  //list name to be displayed in a paragraph tag
  var name= document.createElement('p');
  name.innerHTML=list_name;
  
  //create a ul
  list_id=numtowords(num);
  var ul= document.createElement('ul');
  ul.setAttribute('id',list_id);
//alert(list_id);

//create a text box and button to let user add items to the list

  var txt_box_id='add_desc'+num;
  //alert(txt_box_id);
  var desc_box= document.createElement("input");
desc_box.setAttribute("type", "textbox");
 desc_box.setAttribute('id',txt_box_id);
  
  //create add item button
  var add_button= document.createElement("input");
 add_button.setAttribute("type", "button");
 add_button.setAttribute('id','add_item_button');
add_button.setAttribute('value','Add Item');
add_button.onclick = function() {
    additem(list_id,txt_box_id);
};
  
  
  //adding div to body and list,desc box to div
  document.body.appendChild(newdiv);
  newdiv.appendChild(name);
  newdiv.appendChild(ul);
newdiv.appendChild(desc_box);
 newdiv.appendChild(add_button);
  
}


function numtowords(num)
{
if(num==1)
return "one";


if(num==2)
return "two";


if(num==3)
return "three";


if(num==4)
return "four";


if(num==5)
return "five";


if(num==6)
return "six";


if(num==7)
return "seven";


if(num==8)
return "eight";


if(num==9)
return "nine";


if(num==10)
return "ten";


if(num==11)
return "eleven";


if(num==12)
return "twelve";

}
//var new1=(numtowords(1));

//alert(new1);
