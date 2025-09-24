export default function Nav({ ShowCards, selected , setShowCards}) {

   function home(){
       setShowCards(false);
   }




    return (
      <div className="navbar p-5 mb-5  flex justify-between items-center">
        <img src="/assets/marvelLogo.png" alt="" className="h-10" onClick={()=>home()} />
        {ShowCards && (
          <div className="border p-2 px-5 rounded-2xl bg-white/40">
            <h1>Your Score: {selected.length}</h1>
            <h1>Max Score: 40</h1>
          </div>
        )}
      </div>
    );
  }
  