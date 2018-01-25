
$(document).ready(function() {
var foodsearch="";
var ingArray=[{'name':'burger','ingredients':[{'ing':'beef patty','loc':'NTUC','price':'$2.00'},{'ing':'lettuce','loc':'cold storage','price':'$1.00'}]}];
console.log(ingArray[0].ingredients[1].ing);

$.getJSON("../food.json", function(data){
	console.log(data);
});

$("#findbtn").click(function(){	
	searchFood();
});

function searchFood(){		
	
	foodsearch = $("#foodfind").val();
	$("#foodfind").val("");
	$(".ingtable").remove();
	$("#foodtable").append("<tbody class='ingtable'></tbody>");
	for(i=0;i<ingArray.length;i++){
		if(ingArray[i].name==foodsearch){
			for(j=0;j<ingArray[i].ingredients.length;j++){
				$(".ingtable").append("<tr id="+j+"+><th>"+(j+1)+"</th><td>"+ingArray[i].ingredients[j].ing+"</td><td>"+ingArray[i].ingredients[j].loc+"</td><td>"+ingArray[i].ingredients[j].price+"</td></tr>");		
				console.log(j);
			}
		}
	}
	//$(".tasktable").append("<tr id="+index+"+><th>"+(index+1)+"</th><td>"+taskArray[index].name+"</td><td>"+taskArray[index].price+"</td><td><input type='checkbox' name='checkbox-0 ' ></td></tr>");		

}
/*
	$("#findbtn").click(function() {
	 		console.log(this.id);
        if($(this).is(":clicked")) {
           removeIng(this.id);
           foodsearch--;
        }              
    });
    foodsearch++;
    $("#findbtn").val("");
	
	function removeIng(id){
		$(".ingRow").remove();
		ingArray.splice(id,1);
		for(i=0;i<ingArray.length;i++){
		  $(".ingtable").append("<tr class='ingRow'><th>"+i+"</th><td>"+ingkArray[i].name+"</td><td>"+ingArray[i].priority+"</td><td><input type='button' id="+i+"></td></tr>");
		  $("#"+i).click(function() {
        	if($(this).is(":clicked")) {
            	removeIng(this.id);
            	index--;
        	}              
   		 });
		}

	}	
*/
});
