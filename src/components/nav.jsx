

export default function Nav({ ShowCards , selected}){



    return(
        <div className="navbar p-5 md:mb-5 mb-40 flex justify-between items-center">
            <img src="./src/assets/marvelLogo.png" alt="" className="h-10 " />
            {/* REMOVOVE THE EXCLAMATORY MARK */}
            {(!ShowCards) && <div className="border p-2 px-5 rounded-2xl bg-amber-50" >
                <h1>Your Score : {selected.length-1}</h1>
                <h1>Max Score : 40</h1>
            </div>}
        </div>
    )
}