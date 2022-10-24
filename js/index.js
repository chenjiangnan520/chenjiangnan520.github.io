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
        let service_ico_img = document.querySelectorAll(".service_item .service_ico .service_ico_img")
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
      
      


