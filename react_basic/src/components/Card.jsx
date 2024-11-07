import view from "../assets/view.jpg"

function Card({kapish}){
    return(

        <>
    <div className="w-60 flex flex-col rounded-xl m-auto bg-black text-red-600 min-h-[19rem] ">
<div>
  <img
    src={view}
    alt="test"
    className="h-full w-full"
  />
</div>
<div className="flex flex-col py-3 px-3 pb-10">
  <div className="flex justify-between ">
    <h1 className="font-bold ">Bored ape nft accidental</h1>
    <h1>Price</h1>
  </div>
  <div className="flex  justify-between">
    <p>#345</p>
    <p>0.01</p>
  </div>
</div>
</div>

    </>
)

}
export default Card;