var studentName=function(textInput){
	$.ajax({
		url:'judge_stu_name',
		type:'POST',
		data:{
			"stuName":textInput.value
		},  //给后台参数
		dataType:'json', 
		//success表示成功接收请求
		success:function(stuMessDefault,unFind,sameName){ //message表示后台返回的数据
			if(stuMessDefault.status=="error"){
				textP[0].innerHTML =stuMessDefault.message;//表示数据接收成功
			}
			else{
				alert("数据接收失败")//数据接收失败
			}
			if(unFind.status=="error"){
				var unfin = document.getElementById("unfin"),
				shade = document.getElementById("shade");
				unfin.style.display = "block";
				shade.style.display = "block";
			}
			if(sameName.status == "accept"){
				sameId.innerHTML = sameName.message
			}
		},
		//error表示接收请求失败
		error:function(){
//			alert("错误");
			if(stuMessDefault.status=="error"){
				textP[0].innerHTML =stuMessDefault.message;//表示数据接收成功
			}
			else{
				alert("数据接收失败")//数据接收失败
			}
		}
			
	}),
}
a();

var stuMessDefault={
"message": "*学生姓名格式有误",
"status": "error"
}
var unFind={
"message": "未查询到您的个人信息，请检查姓名输入是否有误"，
"status": "error"
}
var sameName={
"message": "计算机工程学院共有2名学生与您同名,请选择你的身份信息：",
 "status": "accept"，
    "list": [
        {
            "stuName": "zkl",
            "idCard": "123333",
            "id": "402880945df44fa2015df44fa4ac0000"
        },
        {
            "stuName": "zkl",
            "idCard": "126666",
            "id": "402880945df463a2015df463a52a0000"
        }
    ]
}
var checkMess ={
    "classname": "2017软件4班",
    "dormitory": "C10-655",
    "stuName": "zzzkl",
    "id": "402880945df49889015df4988c5f0000",
    "message": "如信息错误请检查姓名输入是否有误；\n如信息核对正确，请您完善您的个人相关信息：",
    "stuNo": "201710000002",
    "highschool": "华南理工广州学院",
    "status": "accept"
}
