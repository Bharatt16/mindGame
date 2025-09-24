export default function Nav({ ShowCards, selected , setShowCards}) {

   function home(){
       setShowCards(false);
   }




    return (
      <div className="navbar p-5 mb-5  flex justify-between items-center">
        <img src="/assets/marvelLogo.png" alt="" className="h-10" onClick={()=>home()} />
        {ShowCards && (
          <div className="border p-2 px-5 rounded-2xl bg-white/40 hover:bg-emerald-200 cursor-pointer hover:text-2xl transition-all shadow-emerald-500 shadow hover:shadow-2xl">
            <h1 className="font-[newOne]">Your Score: {selected.length}</h1>
            <h1 className="font-[newOne]" >Max Score: 40</h1>
          </div>
        )}
      </div>
    );
  }
  