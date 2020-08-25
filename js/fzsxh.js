/**  
 * 图片出错处理，可以重加载指定的图片。超过重试次数仍不能正常显示的，显示缺省图片。  
 * 示例<img onerror="showImgDelay(this,'1.jpg',2)" src="1.jpg">  
 *  
 * imgObj:img节点对象  
 * imgSrc:出错时加载的图片地址  
 * maxErrorNum:最大出错次数，防止出现死循环  
 */  
function showImgDelay(imgObj,imgSrc,maxErrorNum){  
    showSpan.innerHTML += "--" + maxErrorNum;  
    if(maxErrorNum>0){  
        imgObj.onerror=function(){  
            showImgDelay(imgObj,imgSrc,maxErrorNum-1);  
        };  
        setTimeout(function(){  
            imgObj.src=imgSrc;  
        },500);  
    }else{  
        imgObj.onerror=null;  
        imgObj.src="https://cdn.jsdelivr.net/gh/cdnapi/img/1.jpg";  
    }  
}
 