//<div id="marquee"  style="border-bottom:2px;border-style:double;border-color:black;padding:2px;">
//        </div>

//<link rel="stylesheet" href="css/marquee.css">
//    <script src="js/marquee.js"></script>


  $(document).ready(function(){
//        $('#loading').delay(5000).fadeOut(800,"swing");
//            
//            var story = document.getElementById('word');
//            var s = document.getElementById('show');
//            var i = 0;
//            timer=setInterval(function(){
//                s.innerHTML=story.innerHTML.substring(0,i);
//                i++;
//                if(s.innerHTML==story.innerHTML){
//                  clearInterval(timer);
//                }
//            },180);
//        
            marquee();
            var t1=null;
            t1=setInterval("marquee()",47200);

    });

   function marquee()
        {
            ADD1();
            setTimeout("clear()",18000);
            setTimeout("ADD2()",18000);
            setTimeout("clear()",32500);
            setTimeout("ADD3()",32500);
            setTimeout("clear()",47199);
             
        }
        function clear(){
            $('#marquee').html("");
        }
        
        function ADD1(){
             $('#marquee').html("<marquee direction=left height=30 scrollamount=8 behavior=scroll><dl><dt>今日推薦餐廳</dt><dd>"+"一番地壽喜燒 六月份謝師宴，滿20人老師免費，預先訂位，免收服務費</dd></dl></marquee>");
        }

        function ADD2(){
            $('#marquee').html("<marquee direction=left height=30 scrollamount=8 behavior=scroll><dl><dt>恭喜</dt><dd>"+"家咖哩 榮獲Google美食評分達4.6顆星之高</dd></dl></marquee>");
        }
        function ADD3(){
            $('#marquee').html("<marquee direction=left height=30 scrollamount=8 behavior=scroll><dl><dt>注意</dt><dd>"+"這一鍋分店陸續開幕囉!從北到南都吃得到~</dd></dl></marquee>");
        }
        