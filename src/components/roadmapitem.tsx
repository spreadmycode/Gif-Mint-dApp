export const RoadMapItem = ({
    title,
    list,
  }: any) => {

var pList = list.map((item:any, index:number) => {
    return <li className="m-1" key={index}>{item}</li>;
});
  
return <div className="flex lg:flex-row flex-col lg:w-6/12 md:w-9/12 sm:w-11/12 border-b border-blue-700 p-5">
      <p className="lg:text-6xl md:text-5xl text-4xl text-blue-700 mt-3 mr-5 amiga-font">{title}</p>
      <ul className="list-disc ml-5">{pList}</ul>
  </div>;
};
  