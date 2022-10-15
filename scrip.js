// const $app = document.getElementById('app')

// class Starship{
//     constructor(){
//         this.color = 'black'
//         window.addEventListener('keydown', ()=>{
//             setTimeout(()=>{
//                 $app.innerHTML =  `<h5> ${this.color}</h5>`

//             },10)
//         })

//     }
// }

// const starship = new Starship();


window.addEventListener('load', ()=>{
    const canvas  = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 500

    class InputHandler{
        constructor(game){
            this.game = game
            window.addEventListener('keydown', ()=>{
                if(e.key === 'ArrowUp'){
                    this.game.keys.push(e.key)
                }
                console.log(this.game.key);
            })

            window.addEventListener('keyup', ()=>{
                if(this.game.keys.indexOf(e.key)>-1){
                    this.game.keys.splice(this.game.keys.indexOf(e.key),1)
                }
                console.log(this.game.keys);
            })
        }
    }

    class Player{
        constructor(game){
            this.game = game
            this.width = 120
            this.height= 190
            this.x = 20
            this.y = 100
            this.speedY = 1 // pasos que va dando
            // this.black = true
        }
        update(){
            this.y += this.speedY
        }
        draw(context){
            // this.black = this.black ? false : true
            // context.fillStyle = this.black ? 'black' : 'white'
            context.fillRect(this.x, this.y, this.width, this.height)
        }
    }

    class Game{
        constructor(width, height){
            this.width = width
            this.height = height
            this.player = new Player(this)
            this.input = new InputHandler(this)
            this.keys = []
        }

        update(){
            this.player.update()
        }

        draw(context){
            this.player.draw(context)
        }

    }

    const game = new Game(canvas.width, canvas.height)
    function animate(){
        ctx.clearRect(0,0, canvas.width, canvas.height)
        game.update()
        game.draw(ctx)
        requestAnimationFrame(animate)
    }

    animate()
})