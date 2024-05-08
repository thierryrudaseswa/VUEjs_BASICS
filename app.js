const app = Vue.createApp({
    data(){
        return {
            url:'http://www.thethitsi.co.rw',
            showdet: true,
            title:"Thierry title",
            author:"Dr.Thierry",
            age: 23,
            x:0,
            y:0,
            books: [
                {title:'name of the land  ',author:"Rudaseswa Thierry"},
                {title:'name of the land  ',author:"Rudaseswa Thierry"},
                {title:'name of the land  ',author:"Rudaseswa Thierry"},
                {title:'name of the land  ',author:"Rudaseswa Thierry"}
            ] 
        }
    },
  
   methods:{
    showDetails(){
        this.showdet= !this.showdet
    },
    handleEvent(){
console.log("thierry")
    },
    handleMouseEvent(e){
        this.x = e.offsetX
        this.y = e.offsetY
    }


   }
})
app.mount('#app')