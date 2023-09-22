function loader(){
       gsap.set("body",{
    overflowX:"hidden"
})
    var tl4 = gsap.timeline()
    tl4.from("#page1>h1",{
        transform:"translateX(100%)",
        duration:5,
        // ease:Expo.linear
    },"loader")
    tl4.to(".sq1",{
        opacity:1,
        duration:1,
        delay:-0.3
    },"loader")
    tl4.to(".sq1 .sm1,.sm2,.sm3,.sm4,.sm5,.sm6,.sm7,.sm8",{

        duration:5,
        transform:"translateX(-800%)"
    },"loader")
   tl4.to(".wsq",{
    transform:"translateX(0%)",
    duration:5
   },"loader")
   tl4.to("#loader>img",{
    transform:"translateX(110%) rotateZ(170deg)",
    duration:5
   },"loader")
   tl4.to("#loadercircle",{
    transform:"translateX(110%) scale(100)"
   })
   tl4.to("#loadercircle2",{
    transform:"translateX(110%) scale(100)"
   })

   tl4.to("#loadercircle",{
    display:"none"
   })
   tl4.to("#loader",{
    display:"none"
   })
   tl4.to("#loadercircle2",{
    transform:"translateX(110%) scale(1)"
   })
   tl4.to("#page1>h1",{
    y:"6vw"
   })

}




function page2effect(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"5% 80%",
            end:"10% 28%",
            scrub:1,
            // markers:true
        }
    })
   
    tl.from("#page3>.fh1",{
        transform:"rotate(1deg)",
        y:70,
        ease:"none",

    })
    tl.from("#page3>.sh1",{
        transform:"rotate(1deg)",
        y:60,
        ease:"none",

    })
    tl.from("#page3>.th1",{
        transform:"rotate(1deg)",
        y:40,
        ease:"none",

    },"a")
    tl.from("#page3>.f2h1",{
        transform:"rotate(1deg)",
        y:30,
        ease:"none",

    })
    tl.to("#page3,#page2",{
        backgroundColor:"rgb(163 100 82)",
        duration:0.5,
    },"a")
}

function page5effect(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#container",
            start:"top top",
            end:"bottom -20%",
            pin:true,
            scrub:0.03,
            scroller:"body",
            // markers:true
        }
    })
    tl2.from("#page5 hr",{
        transform:"translateX(-130%)"
    },"b")
    tl2.from("#page5 #colors",{
        transform:"translateX(100%)"
    },"b")
    tl2.from("#page5 #hero5 h6,#colorbottomimg,#gallery",{
        opacity:0
    },"b")
    tl2.to("#page5",{
        // transform:"translateY(-100%)"
        top:"-100%",
        ease:"none"

    })
    tl2.to("#page6 h6,.name,#imgdiv",{
        x:-450,
    })
    tl2.to("#page6 .name,h6",{
        opacity:0
    })
    // tl2.to("#page6 #imgdiv",{
    //     height:"12vw",
    //     width:"25vw"
    // },"c")
    tl2.to("#page6 #imgdiv",{
        height:"0vw",
        width:"0vw"
    },"c")
    tl2.from("#page6 #centercircle",{
        y:500,
        transform:"translate(-50%,-50%) scale(0.4)",
        delay:-0.1
    },"c")
    tl2.to("#page6 #gallery",{
        y:200,
        opacity:0
    },"c")
    tl2.to("#whitediv",{
        transform:"translate(-50%,-50%) scale(0)"
    },"d")
    
    tl2.to("#page6 #centercircle",{
        opacity:0
    },"d")
    tl2.from("#page6 #pinkflare",{
        y:150,
        transform:"translate(-50%,-20%) rotate(5deg)",
        delay:-0.3
    })
    tl2.from("#page6 #pinkdiv",{
        top:"120%"
    },"e")
    tl2.from("#page6",{
        transform:"scale(1.05)"
    },"e")
    tl2.to("#page6 #pinkflare",{
        transform:"translate(-50%,-20%) scale(1.05)"
    },"e")
    tl2.to("#page6",{
        top:"-100%",
        ease:"none"
    })
    tl2.to(".gradientcircle:nth-child(1)",{
        transform:"translateY(0)",
        width:"16vw",
        height:"16vw"

    },"f")
    tl2.to(".gradientcircle:nth-child(2)",{
        transform:"translateY(0)",
        delay:0.05,
        width:"16vw",
        height:"16vw"
    },"f")
    tl2.to(".gradientcircle:nth-child(1)",{
        marginRight:"-16vw"
    })
    tl2.to(".gradientcircle:nth-child(1)",{
        transform:"scale(10)",
       
    },"h")
    tl2.to("#numberseq h1",{
        transform:"translateY(-100%)"
    },"h")
    tl2.to(".gradientcircle",{
    display:"none"
    },'g')
    
    tl2.to("#gradient #gradp1",{
        transform:"translateX(-100%)",
        delay:0.3

    },"g")
   
    tl2.to("#gradient #gradp2",{
        transform:"translateX(-100%)",

    },"g")
    tl2.to("#hero7text #t1",{
        opacity:0
    },"g")
    tl2.to("#hero7text #t2",{
        opacity:1,
        delay:0.4
    },"g")
    tl2.to("#gradient #gradp2 #gr",{
        transform:"translateX(-94%) translateY(30%)",
        delay:0.3,
    },"g")
    tl2.to("#numberseq h1",{
        transform:"translateY(-200%)",
        delay:-0.4

    })
    tl2.to("#stripdiv .strip",{
        transform:"translateY(0)",
        stagger:0.06
    })
    tl2.to(".smallstrip",{
        transform:"translateX(-50%)"
    })
    tl2.to(".innerstr",{
        transform:"translateX(-15%)",
        delay:-0.3
    })
    
    tl2.to("#page7",{
        top:"-100%",
        ease:"none"
    })
    document.querySelectorAll(".color")
    .forEach(function(color){
        color.addEventListener("mouseenter",function(){
            var elem = color.childNodes[0];
            gsap.to(elem,{
                transform:"scale(105)",
                duration:0.3
            })
          
        })
        color.addEventListener("mouseleave",function(){
            gsap.to(".scalecolor",{
                transform:"scale(0)",
                duration:0.3
            })
        
        })
    })


}
function prism(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:"#prism", 
            start:"710% 50%",
            end:"770% 30%",
            scrub:1,
            scroller:"body",
            // markers:true,


        },
    })
    tl3.to("#above",{
        transform:"translateX(110%)"
    })
    tl3.from("#pink #h21",{
        x:-150,
        ease:"none"
    },"h22")
    tl3.from("#pink #h22",{
        x:130,
        ease:"none"
    },"h22")
    tl3.from("#pink #h23",{
        x:-150,
        ease:"none"
    },"h22")
}
gsap.to(".circleinslide",{
    scrollTrigger:{
        trigger:"#slidecircles",
        scroller:"body",
        start:"top 80%",
        end:"210% 5%",
        scrub:"true",
        // markers:true
    },
    x:-200
})
gsap.to("#cameralens #lens",{
    scrollTrigger:{
        trigger:"#page2",
        start:"top 30%",
        end:"60% -10%",
        scrub:"true",
        scroller:"body",
        // markers:true
    },
    transform:"rotate(160deg)",
    duration:3,
    ease:Expo.linear
})
gsap.to("#hero8 #lens2",{
    scrollTrigger:{
        trigger:"#hero8",
        start:"480% 60%",
        end:"550% -10%",
        scrub:"true",
        scroller:"body",
        // markers:true
    },
    transform:"translate(-20%,20%) rotate(160deg)",
    duration:3,
    ease:Expo.linear
})
gsap.to("#cccontain h2",{
    scrollTrigger:{
        trigger:"#ccontain",
        start:"880% top",
        end:"1060% 30%",
        scrub:"true",
        scroller:"body",
        // markers:true
    },
    transform:"translateX(-100%)",
    duration:3,
})
gsap.from("#p1",{
    scrollTrigger:{
        trigger:"#colorchange",
        start:"2300% 20%",
        end:"2800% 30%",
        scrub:1,
        scroller:"body",
        // markers:true
    },
    transform: "translateY(21vw) scale(0.7)",
    duration:5,
})
gsap.from("#p2",{
    scrollTrigger:{
        trigger:"#colorchange",
        start:"2300% 20%",
        end:"2800% 30%",
        scrub:1,
        scroller:"body",
        // markers:true
    },
    transform: "scale(0.7) translateY(41vw)",
    duration:5,
})
gsap.from("#p3",{
    scrollTrigger:{
        trigger:"#colorchange",
        start:"2300% 20%",
        end:"2800% 30%",
        scrub:1,
        scroller:"body",
        // markers:true
    },
    transform: "scale(0.7) translateY(61vw)",
    duration:5,
})
gsap.to("#pinkf",{
    scrollTrigger:{
        trigger:"#colorchange",
        start:"2750% 60%",
        end:"2800% 30%",
        scrub:1,
        scroller:"body",
        // markers:true
    },
    x:-300,

    duration:5,
})
loader();
prism();
page2effect();
page5effect();
