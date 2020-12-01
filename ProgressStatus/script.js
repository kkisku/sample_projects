 $(document).ready(function(){
        $.get("demo.txt", function(data, status){
            let ar_data = JSON.parse(data);
            let ar_len = ar_data.length;
            let wd= 100/(ar_len+1)+'%';

        for(let i=0;i<ar_len;i++){
        let txt = $("<li class=\"step\"></li>").text(`P#${i+1}`).append("<ul class=\"inner\"></ul>");
          $(".progressbar>ul").append(txt); 
            let inn= document.getElementsByClassName('inner')[i];
            let len = (ar_data[i].length);
            for(let j=0; j<len;j++){
                let txt1 = $("<li></li>").text(ar_data[i][j][0]);
                $(inn).append(txt1);
            }
        }
        $(".progressbar>ul").append("<li class=\"step\" id=\"mail\">Email</li>"); 
     let stepsP = $(".step");   
    $('.progressbar>ul>li').css('width',wd);
    let tm=0;  
    setTimeout(function() {
      stepsP.each(function(index) {
        let _t = $(this);    
        let stepsIn = $(this).find('ul.inner>li');
        stepsIn.each(function(ind){
        let _tt = $(this);
        let callAjax = null;
        let stepCancel = _t.attr('class'); 

        let  k= setTimeout(function() {
        stepCancel =_t.prevAll('.step.cancel').attr('class')?_t.prevAll('.step.cancel').attr('class'): _t.attr('class');
           if(stepCancel.includes("cancel")){ 
              callAjax.abort();
           }
           callAjax= $.get("demo.txt", function(data, status){
            ar_data=JSON.parse(data).slice();   

            if(ar_data[index][ind][1]==1){
                _tt.addClass('inner done');
                if(ind==ar_data[index].length-1){
                   _t.addClass('step done');
                    if(index== ar_data.length-1){
                     $('#mail').addClass('step done'); 

                }
                   }
            } else if(ar_data[index][ind][1]==0){
           _tt.addClass('inner cancel'); 
            _t.addClass('step cancel');
           $('#mail').addClass('step done'); 
           for(let i=ind+1;i<ar_data[index].length;i++){
               ar_data[index][i][1]=2;
           }
           for(let j=index; j<ar_data.length;j++){
           for(let k=0;k<ar_data[j].length;k++){
                    ar_data[j][k][1]=2;
         }          
        }
        }else{
            clearTimeout(k);
        }
        });
       }, (tm++)*5000); 
      });
      });
    }, 1000); 
    });
    });

