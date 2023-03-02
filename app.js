
//tab

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
    

    function opentab(tabname){
      for (tablink of tablinks){
           tablink.classList.remove("active-link");
      }
      for (tabcontent of tabcontents){
           tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");

    }


    // sidemenu
    let sidemeu = document.getElementById("sidemenu");
    
    
    function openmenu(){
      sidemeu.style.right ="0";
    }

    function closemenu(){
      sidemeu.style.right ="-200px";
    }



  //  expand image
     let fullImgBox = document.getElementById("fullimgbox");
    let fullImg = document.getElementById("fullimg");

    function openFullImg(pic){
       fullImgBox.style.display= "flex";
       fullImg.src = pic;
    }

    function closeFullImg(){
       fullImgBox.style.display= "none";
    }

   
    