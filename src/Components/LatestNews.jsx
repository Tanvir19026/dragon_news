import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { DataContext } from "../Context/DataContex";


const LatestNews = () => {
  const {data,loading}=useContext(DataContext);
  if(loading){
    return <p>Loading...</p>
  }

  const todayPicks=data.filter(item =>item.others.is_trending==true);






    return (
        <div className="flex align-items-center bg-[var(--color-bg-primary)] p-3">
           
                <p className="bg-[var(--color-latest-btn)] text-white px-3 py-2 my-2">Latest</p>
           <Marquee className="flex gap-3 " pauseOnHover={true} speed={100}>
             <p className=" font-bold my-3 inline">

              {
              todayPicks.map(item=><p className="inline px-3" key={item._id}>{item.title}</p>)
             }
             </p>
           
           </Marquee>
            
        </div>
    );
};

export default LatestNews;