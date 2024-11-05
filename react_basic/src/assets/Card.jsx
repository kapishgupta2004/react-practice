function Card({kapish}){
    return(
<div className="max-w-sm mx-auto overflow-hidden">
      <div className="relative h-48">
        <img
    src="./photo.jpg"
alt="Card image"
         className="h-2"
        />
      </div>
      <div>
        <div>Card Title {" "} { kapish}</div>
      </div>
      <div>
        <div className="bg-black text-white">
          This is a basic card component with an image and some description. It's built using Tailwind CSS and Next.js, providing a clean and modern look that's fully responsive.
        </div>
      </div>
    </div>
//         <>
//     <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
// {/* <div> */}
//   <img
//     src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
//     alt="test"
//     className="h-24 w-24"
//   />
// {/* </div> */}
// <div className="flex flex-col py-3 px-3 pb-10">
//   <div className="flex justify-between ">
//     <h1 className="font-bold ">Bored ape nft accidental</h1>
//     <h1>Price</h1>
//   </div>
//   <div className="flex  justify-between">
//     <p>#345</p>
//     <p>0.01</p>
//   </div>
// </div>
// </div>

//     </>
)

}
export default Card;