AFRAME.registerComponent("car-move-x",{
    schema:{
        moveX:{type:"number",default:0}
    },

    tick:function(){
        window.addEventListener("click",e=>{
            this.data.moveX += 0.0005
            //setting pos to position
            var pos = this.el.getAttribute("position")
            pos.x = this.data.moveX
            this.el.setAttribute("position",{
                x:pos.x,
                y:pos.y,
                z:pos.z
            })
        })
    },

    init:function(){
        var clickCounter = 0
        window.addEventListener("click",e=>{
            clickCounter += 1
            console.log(clickCounter)
        })

        //console.log(clickCounter)
    }
})