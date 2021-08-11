//   <!--  ADD CSS  -->
//    <link rel="stylesheet" href="imgs/recommed.css">
//    <link href="css/_css/jquery-ui.min.css" rel="stylesheet">
//    <script src="js/jquery-1.11.0.min.js"></script>
//    <script src="js/jquery-ui.min.js"></script>
//   <!--  ADD CSS  -->
//
//  <!--  ADD javascript  -->
//    <script src="js/Recommed.js"></script>
//  <!--  ADD javascript  -->




//script

// <script>
        var checked_Frist_obj;
        var checked_Second_Obj = [];
        var checked_Third_Obj = [];
        $(document).ready(function() {
            $('#dialog').dialog({
                //                dialogClass: 'no-close',
                open: function(event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                },
                autoOpen: false,
                width: 600,
                height: 550,
                show: 1500,
                show: 'slideDown',
                hide: 1000,
                hide: 'slideUp',
                draggable: false,
                resizable: false,
                modal: true,
                closeOnEscape: false,
                buttons: {
                    
                    
                    "確定": function() {
                        try {
                            checked_Frist_obj = document.querySelector('input[name="radiobutton"]:checked').value;

                            $('input[name="radiobutton2"]:checked').each(function() {
                                checked_Second_Obj.push($(this).val());
                            });

                            $('input[name="radiobutton3"]:checked').each(function() {
                                checked_Third_Obj.push($(this).val());
                            });
//                            alert(checked_Frist_obj + checked_Second_Obj + checked_Third_Obj);

                            $('#loding').addClass("spinner");
                            $('#loding_word').addClass("spinner_word");
                            $('#loding_word').append("Search");

                            $("#loding").animate({
                                opacity: 0
                            }, 4000);
                            $("#loding_word").animate({
                                opacity: 0
                            }, 4000);
                            setTimeout("Search_animate()", 6000)
                            setTimeout("Searching()", 3000);
                        } 
                        catch {
                            alert("請至少各選擇一項!")
                        }
                    },
                    "重新選擇":function(){
                        clearAll();
                    },
                    "關閉": function() {

                        $(this).dialog('close');
                        $('#loding').removeClass("spinner");
                        $('#loding_word').removeClass("spinner_word");
                        $('#loding_word').html('<div id="loding"></div>');
                        clearAll();

                    }
                }
            });


            $('.div_right_bottom').click(function(evt) {
                evt.preventDefault();
                $('#dialog').dialog('open');
            });


        }); // end ready

        function clearAll(name) {
            var myInput = document.getElementsByTagName('input');
            for (var i = 0; i < myInput.length; i++) {
                if (myInput[i].type == "radio") {
                    myInput[i].checked = false;
                }
            }
            checked_Frist_obj = [];
            checked_Second_Obj = [];
            checked_Third_Obj = [];
            $("#IMAGE").animate({
                opacity: 0
            }, 4000);
            $("#IMAGE").html("");
        }

        function Search_animate() {
            $("#loding").animate({
                opacity: 1
            }, 4000);
            $("#loding_word").animate({
                opacity: 1
            }, 4000);
            $('#loding').removeClass("spinner");
            $('#loding_word').removeClass("spinner_word");
            $('#loding_word').html('<div id="loding"></div>');

        }
        var IMG = document.createElement("img");


        function Searching() {
             
            
            if (checked_Frist_obj == "平價") {
                if (checked_Second_Obj == "義式") 
                {
                    IMG.src = "img/%E5%B9%B3%E5%83%B91.jpg";
                    IMG.title = "享樂煮義";
                    $("#IMAGE").append("<a href=" + "https://www.facebook.com/%E4%BA%AB%E6%A8%82%E7%85%AE%E7%BE%A9-Pasta-with-Pleasure-261687827368324/" + " target=" + "_blank" + ">");
                    $("#IMAGE a").append(IMG);
                    $("#IMAGE").animate({
                        opacity: 1
                    }, 3000);
                } 
                else if (checked_Second_Obj == "中式") 
                {
                    if (checked_Third_Obj == "0.5") 
                    {
                        IMG.src = "img/%E5%B9%B3%E5%83%B92.jpg";
                        IMG.title = "北一水餃";
                        $("#IMAGE").append("<a href=" + "https://www.facebook.com/T033507572/" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    } 
                    else if (checked_Third_Obj == "1") 
                    {
                        IMG.src = "img/%E5%B9%B3%E5%83%B93.jpg";
                        IMG.title = "滿大碗滷味";
                        $("#IMAGE").append("<a href=" + "https://www.facebook.com/%E6%BB%BF%E5%A4%A7%E7%A2%97%E6%BB%B7%E5%91%B3-%E4%B8%AD%E5%A3%A2%E5%81%A5%E8%A1%8C%E5%BA%97-138954926856750/" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    } 
                    else if (checked_Third_Obj == "1.5") 
                    {
                        IMG.src = "img/%E5%B9%B3%E5%83%B96.jpg";
                        IMG.title = "峰味麵線食堂";
                        $("#IMAGE").append("<a href=" + "https://www.facebook.com/feng.delicious/" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    }
                } 
                else if (checked_Second_Obj == "西式") 
                {
                    IMG.src = "img/%E5%B9%B3%E5%83%B94.jpg";
                    IMG.title = "走樣個人牛排杯";
                    $("#IMAGE").append("<a href=" + "https://www.foodytw.com/restaurant/32762/%E8%B5%B0%E6%A8%A3%E5%80%8B%E4%BA%BA%E7%89%9B%E6%8E%92%E6%9D%AF-%E4%B8%AD%E5%A3%A2%E5%BA%97-Walking-steak" + " target=" + "_blank" + ">");
                    $("#IMAGE a").append(IMG);
                    $("#IMAGE").animate({
                        opacity: 1
                    }, 3000);
                }
                else if (checked_Second_Obj == "日式") 
                {
                    IMG.src = "img/%E5%B9%B3%E5%83%B95.jpg";
                    IMG.title = "すき家";
                    $("#IMAGE").append("<a href=" + "https://www.facebook.com/sukiya.zensho.taiwan/" + " target=" + "_blank" + ">");
                    $("#IMAGE a").append(IMG);
                    $("#IMAGE").animate({
                        opacity: 1
                    }, 3000);
                }
            }
            
            
            
            if (checked_Frist_obj == "中價") {
                if (checked_Second_Obj == "義式") 
                {
                    IMG.src = "img/%E4%B8%AD%E5%83%B93.jpg";
                    IMG.title = "地平線一號";
                    $("#IMAGE").append("<a href=" + "https://www.facebook.com/horizon033286983/" + " target=" + "_blank" + ">");
                    $("#IMAGE a").append(IMG);
                    $("#IMAGE").animate({
                        opacity: 1
                    }, 3000);
                } 
                else if (checked_Second_Obj == "中式") 
                {
                        IMG.src = "img/%E4%B8%AD%E5%83%B96.jpg";
                        IMG.title = "圓味涮涮鍋";
                        $("#IMAGE").append("<a href=" + "https://www.facebook.com/YWshuan/" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                     
                } 
                else if (checked_Second_Obj == "西式") 
                {
                    if (checked_Third_Obj == "1.5")
                    {
                        IMG.src = "img/%E4%B8%AD%E5%83%B94.jpg";
                        IMG.title = "How Fun食堂";
                        $("#IMAGE").append("<a href=" + "https://www.facebook.com/howfunpaellabar3/" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    }
                    else
                    {
                        IMG.src = "img/%E4%B8%AD%E5%83%B95.jpg";
                        IMG.title = "甘日洋食行";
                        $("#IMAGE").append("<a href=" + "https://www.facebook.com/GanRiBrunch/" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    }
                }
                else if (checked_Second_Obj == "日式") 
                {
                    if (checked_Third_Obj == "0.5")
                    {
                        IMG.src = "img/%E4%B8%AD%E5%83%B91.jpg";
                        IMG.title = "開丼";
                        $("#IMAGE").append("<a href=" + "http://www.kaidonno1.com/" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    }
                    else
                    {
                        IMG.src = "img/%E4%B8%AD%E5%83%B92.jpg";
                        IMG.title = "家咖喱";
                        $("#IMAGE").append("<a href=" + "https://www.jiacurry.com/?stores=27" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    }
                }
            }
            
             if (checked_Frist_obj == "高價") {
                if (checked_Second_Obj == "義式") 
                {
                    IMG.src = "img/%E9%AB%98%E5%83%B93.jpg";
                    IMG.title = "樂福利";
                    $("#IMAGE").append("<a href=" + "https://www.facebook.com/lovelybistro/" + " target=" + "_blank" + ">");
                    $("#IMAGE a").append(IMG);
                    $("#IMAGE").animate({
                        opacity: 1
                    }, 3000);
                } 
                else if (checked_Second_Obj == "中式") 
                {
                    if (checked_Third_Obj == "0.5")
                    {
                        IMG.src = "img/%E9%AB%98%E5%83%B96.jpg";
                        IMG.title = "這一鍋";
                        $("#IMAGE").append("<a href=" + "http://www.toponepot.com/" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    }
                    else
                    {
                        IMG.src = "img/%E9%AB%98%E5%83%B91.jpg";
                        IMG.title = "參和院";
                        $("#IMAGE").append("<a href=" + "http://www.sanhoyan.com.tw/" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    }
                } 
                else if (checked_Second_Obj == "西式") 
                {
                    
                        IMG.src = "img/%E9%AB%98%E5%83%B94.jpg";
                        IMG.title = "艾維農歐風素食";
                        $("#IMAGE").append("<a href=" + "http://www.avignonrestaurant.com/" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    
                }
                else if (checked_Second_Obj == "日式") 
                {
                    if (checked_Third_Obj == "1")
                    {
                        IMG.src = "img/%E9%AB%98%E5%83%B92.jpg";
                        IMG.title = "東風舞之磯";
                        $("#IMAGE").append("<a href=" + "https://www.facebook.com/%E6%9D%B1%E9%A2%A8%E8%88%9E%E4%B9%8B%E7%A3%AF-552364274826034/" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    }
                    else
                    {
                        IMG.src = "img/%E9%AB%98%E5%83%B95.jpg";
                        IMG.title = "一番地";
                        $("#IMAGE").append("<a href=" + "https://www.facebook.com/pages/%E4%B8%80%E7%95%AA%E5%9C%B0%E5%A3%BD%E5%96%9C%E7%87%92/356454744451809" + " target=" + "_blank" + ">");
                        $("#IMAGE a").append(IMG);
                        $("#IMAGE").animate({
                            opacity: 1
                        }, 3000);
                    }
                }
            }
            
            ;

        }

//    </script>

//script


//Add div
// <div class="div_right_bottom">
//        <a title="為您推薦">
//            <img src="img/mouth-open.png" width="150px" height="150px">
//        </a>
//    </div>
//<div id="dialog" class="container" title="為您推薦!!" style="font-family: Microsoft JhengHei">
//                <form name="form1">
//                    我今天想花
//                    <input type="radio" name="radiobutton" value="平價"> 平價
//                    <input type="radio" name="radiobutton" value="中價"> 中價
//                    <input type="radio" name="radiobutton" value="高價"> 高價<br>
//                    想吃的類型
//                    <input type="radio" name="radiobutton2" value="義式"> 義式
//                    <input type="radio" name="radiobutton2" value="中式"> 中式
//                    <input type="radio" name="radiobutton2" value="西式"> 西式
//                    <input type="radio" name="radiobutton2" value="日式"> 日式<br>
//                    預計送餐時間
//                    <input type="radio" name="radiobutton3" value="0.5"> 30分鐘內
//                    <input type="radio" name="radiobutton3" value="1"> 1小時內
//                    <input type="radio" name="radiobutton3" value="1.5"> 1小時半內<br>
//
//                </form>
//
//                <div id="loding_word">
//                    <div id="loding"></div>
//                </div>
//                <br><br>
//                <div id="IMAGE" class="IMAGE"></div>
//            </div>
