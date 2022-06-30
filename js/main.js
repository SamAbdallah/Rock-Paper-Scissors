
    let r= document.getElementById("rocks")
    let p= document.getElementById("papers")
    let s= document.getElementById("scissors")
    let result=document.getElementById("result")


    r.src="img/rock.png"
    p.src="img/paper.png"
    s.src="img/sicss.png"

    document.getElementById("rock").onclick=function () {turn(1)}
    document.getElementById("paper").onclick=function () {turn(2)}
    document.getElementById("scissor").onclick= function () {turn(3)}




    function turn (item) {
      let comp = Math.floor(Math.random() * 3) + 1;
      console.log(comp)

      if (item === 1) {
         if (comp===1) {
          result.innerHTML="Draw"
        }

         else if(comp===2) {
          result.innerHTML="Paper Beats Rock.. You lose!"
        }

         else if(comp===3) {
          result.innerHTML="Rock beats Scissors.. You win!"
        }
      }

      else if (item===2) {
         if (comp===2) {
           result.innerHTML="Draw"
        }

         else if(comp===1) {
           result.innerHTML="Paper Beats Rock.. You win!"
        }

         else if(comp===3) {
          result.innerHTML="Scissors beat paper.. You lose!"
        }


      }

      else if (item===3) {
         if (comp===3) {
           result.innerHTML="Draw"
        }
         else if(comp===1) {
           result.innerHTML="Rock beats Scissors.. You lose!"
        }

         else if(comp===2) {
           result.innerHTML="Scissors beat paper.. You win!"
        }
      }


}
