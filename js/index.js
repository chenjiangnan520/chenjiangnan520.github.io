        let keyword = document.querySelector(".form .keyword")
        let shelper = document.querySelector(".form .shelper")
        
        function text(obj) {
          shelper.innerHTML = obj.g.map(item => {
            return `
                    <li>${item.q}</li>
                    `
          }).join("")
        }
        let tiems =null
        keyword.oninput = function (evt) {
          if(tiems) clearTimeout(tiems)
        tiems = setTimeout(() => {
            if (evt.target.value == "") {
              shelper.innerHTML = ""
              return
            }
            shelper.style.display = "block"
            //动态创建script标签
            let scriptA = document.createElement("script")
            scriptA.src = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=36560,37584,37140,36885,36786,37537,37498,26350,37446,37467&wd=${evt.target.value}&req=2&csor=6&pwd=11jdsal&cb=text&_=1666078688508`
            document.body.appendChild(scriptA)
          //查询结束删除创建的script标签
            scriptA.onload = function () {
              scriptA.remove()
              console.log(1)
            }
            
          }, 500);
          
        }
        keyword.onblur = function () {
          shelper.style.display = "none"
        }
        let alla = document.querySelector(".hotwords")
        
           alla.onmouseover = function (evt) {
              //  console.log(evt.target.nodeName)
               if(evt.target.nodeName==="A"){
                evt.target.classList = "active"
               }
           }
           alla.onmouseout = function (evt) {
            // console.log(evt.target.nodeName)
            if(evt.target.nodeName==="A"){
             evt.target.classList = "public"
            }
        }
     
          let img = document.querySelector(".img img")
          let  imgArr = ['3.jpg','4.jpg', '5.jpg','6.jpg','8.jpg']
          let bannerLI = document.querySelectorAll(".banner-btn li")
          let prev = document.querySelector(".prev")
          let next = document.querySelector(".next")

        
        var count = 0
        function cutImg(){
          img.src = "/images/"+imgArr[count] 
          for(let i =0; i<bannerLI.length;i++) bannerLI[i].classList = '' 
          bannerLI[count].classList = "liActive"
        }
        setInterval(function (){
            count++
            if(count>=imgArr.length) count = 0;
            cutImg()
        },3000)
       
       prev.onclick = function () {     
        count++
        if(count >= imgArr.length) count = 0;
        cutImg()
       }
       next.onclick = function () {     
        count--
        if(count < 0) count = 4;
        cutImg()
       }  
      bannerLI.forEach((element,item) => {
        element.onmouseover = function(){
          for(let i =0; i<bannerLI.length;i++) bannerLI[i].classList = '' 
           element.classList = "liActive"
           img.src =  "/images/"+imgArr[item]
           count = item
        }
      });
      let carousel1 = document.querySelector(".carousel1")
      let carousel1A = document.querySelectorAll(".carousel1 a")
      let carousel1All = document.querySelector(".carousel1All")
      let carousel1A1 = document.querySelector(".carousel1A1")
      let carousel1A2 = document.querySelector(".carousel1A2")
      let Minigraph = document.querySelectorAll(".Minigraph")
     
      carousel1.onmouseover = function(){
        carousel1All.style.display = "block"
          carousel1A[1].classList.add("next1")
          carousel1A[0].classList.add("prev1")
        
      }
      carousel1.onmouseout = function(){
        carousel1All.style.display = "none"
          carousel1A[1].classList.add("next1")
          carousel1A[0].classList.add("prev1")
        
      }
        let k = 0;
        carousel1A1.onclick =  function(){
          for(let i = 0; i < Minigraph.length;i++){
            Minigraph[i].classList.remove("imgActive") 
          }
          k++;
          if(k > 2) k = 0
          Minigraph[k].classList.add("imgActive")
        }
        carousel1A2.onclick = function(){
          for(let i = 0; i < Minigraph.length;i++){
            Minigraph[i].classList.remove("imgActive") 
          }
          k--;
          if(k <= 0) k = 2
          Minigraph[k].classList.add("imgActive")
        }
        // 小图标滑动样式
        SlideStyle()
        function SlideStyle(){
          let service_ico_img_hover = document.querySelectorAll(".service_item .service_ico .service_ico_img_hover")
          let service_item = document.querySelectorAll(".service_list .service_item")
          let spans = document.querySelectorAll(".service_item .service_ico span")
          changeIcon()
          function changeIcon() {
            for(let i = 0; i < service_item.length;i++){
              service_item[i].onmouseover = function (){
                service_ico_img_hover[i].style.visibility = "visible"
                service_ico_img_hover[i].style.opacity = 1
                spans[i].style.color = "#c81623"
              }
              service_item[i].onmouseout = function (){
                service_ico_img_hover[i].style.visibility = "hidden"
                service_ico_img_hover[i].style.opacity = 0
                spans[i].style.color = "#666"
              }
  
            }
          }
        
        }
        floor()
        //楼层样式
        function floor(){
          let elevatorSeckill = document.querySelector(".elevator_seckill a")
          let elevatorSpec = document.querySelector(".elevator_spec a")
          let elevatorChannels = document.querySelector(".elevator_channels a")
          let elevatorFeeds = document.querySelector(".elevator_feeds a")
          let header = document.querySelector("header")
          let bg = document.querySelector(".bg")
          let elevator = document.querySelector(".elevator")
          window.onscroll = function(){
            elevatorSeckill.style.color = "#666"
            elevatorSpec.style.color = "#666"
            elevatorChannels.style.color = "#666"
            elevatorFeeds.style.color = "#666"
           //窗口高度
          //  let windowHight = document.documentElement.clientHeight
           //滚动条移动距离
           let  scrollBar = document.documentElement.scrollTop || document.body.scrollTop
           //距离顶端的偏移量
           let TopHeight = header.offsetHeight+bg.offsetHeight
          //  console.log(scrollBar)
            if(scrollBar >= TopHeight&&(scrollBar <= TopHeight+260)){
              elevatorSeckill.style.color = "#e1251b"
              elevatorSeckill.onmouseover = () => {elevatorSeckill.style.color = "#fff"}
              elevatorSeckill.onmouseout = () => {elevatorSeckill.style.color = "#666"}
              elevator.style.position = "fixed"
              elevator.style.top = "75px"
              
            }else if((scrollBar >= TopHeight+260)&&scrollBar <= (TopHeight+260+260)){
              // elevatorSeckill.style.color = "#666"
              elevatorSpec.style.color = "#e1251b"
              
              elevatorSpec.onmouseover = () => {elevatorSpec.style.color = "#fff"}
              elevatorSpec.onmouseout = () => {elevatorSpec.style.color = "#666"}
             
            }else if(scrollBar >= (TopHeight+260+260)&&scrollBar <= (TopHeight+260+260+845)){
              // elevatorSpec.style.color = "#666"
             
              elevatorChannels.style.color = "#e1251b"
           
              elevatorChannels.onmouseover = () => {elevatorChannels.style.color = "#fff"}
              elevatorChannels.onmouseout = () => {elevatorChannels.style.color = "#666"}
            }
            else if(scrollBar >= (TopHeight+260+260+845)){
              // elevatorChannels.style.color = "#666"
              elevatorFeeds.style.color = "#e1251b"
            
              elevatorFeeds.onmouseover = () => {elevatorFeeds.style.color = "#fff"}
              elevatorFeeds.onmouseout = () => {elevatorFeeds.style.color = "#666"}
            }else{
              elevator.style.position = "absolute"
              elevatorSeckill.style.color = "#666"
            }
          }
          let seckill =  document.querySelector(".seckill")
          let spec =  document.querySelector(".spec")
          let channels =  document.querySelector(".channels")
          let feeds =  document.querySelector(".feeds")
            // 锚点跳转
        elevatorSeckill.onclick = function(){
            seckill.scrollIntoView({behavior:"smooth",block:"start"})
          
        }     
        elevatorSpec.onclick = function(){
          spec.scrollIntoView({behavior:"smooth",block:"start"})
      
      }     
       elevatorChannels.onclick = function(){
        channels.scrollIntoView({behavior:"smooth",block:"start"})
       
       }     
        elevatorFeeds.onclick = function(){
       feeds.scrollIntoView({behavior:"smooth",block:"start"})
      
       }         
          
      }
        

        let timmerH = document.querySelector(".timmer-h")
        let timmerM = document.querySelector(".timmer-m")
        let timmerS = document.querySelector(".timmer-s")
        let countdownS = document.querySelector(".countdown-desc strong")
        setInterval(() =>{
             let currentTime = new Date()
             let endTime = new Date()
             let timmer = currentTime.getHours()
             let time = startTime(timmer+2)
             countdownS.innerHTML = time + ':00'
           
             //开始时间
             function startTime (time){
               if(time%2){
                  time--
               }
               return time;
             }
                         
             endTime.setHours(time)
             endTime.setMinutes(0)
             endTime.setSeconds(0)
             //计算时间差
             let difference = (endTime-currentTime)/1000
             let dTimeH = Math.trunc(difference/60/60) 
             let dTimeM = Math.trunc(difference/60%60) 
             let dTimeS = Math.trunc(difference%60) 

             TimeHtml(dTimeH,dTimeM,dTimeS)

        },1000)
      function TimeHtml (h,m,s){
        if(h<10) h = "0" + h
        if(m<10) m = "0" + m
        if(s<10) s = "0" + s
        timmerH.innerHTML = h
        timmerM.innerHTML = m 
        timmerS.innerHTML = s
      }
      let Minigraph1 = document.querySelectorAll(".Minigraph1")
      let sliderPrev = document.querySelector(".slider .sliderPrev")
      let sliderNext = document.querySelector(".slider .sliderNext")
      // console.log(Minigraph1)
      let cont = 0
      sliderPrev.onclick = function(){
        for( let i=0; i<Minigraph1.length;i++){
          Minigraph1[i].classList.remove ( "box2M")
        }
        cont++
        if(cont>=Minigraph1.length) cont = 0
        Minigraph1[cont].classList.add ( "box2M")
        console.log(Minigraph1[cont].classList)
      }
      sliderNext.onclick = function(){
        for( let i=0; i<Minigraph1.length;i++){
          Minigraph1[i].classList.remove ( "box2M")
        }
        cont--
        if(cont<0) cont = Minigraph1.length-1
        Minigraph1[cont].classList.add ( "box2M")
        console.log(Minigraph1[cont].classList)
      }


