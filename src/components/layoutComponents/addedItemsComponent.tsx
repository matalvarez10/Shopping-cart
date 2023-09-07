import { IPopupData } from "../../interfaces/popupData.interface";

const AddItemsComponent = ({ popupAdded }: { popupAdded: IPopupData[] }) => {
  return (
    <article className="fixed top-20 right-0 m-3 flex flex-col gap-2 font-monstserrat font-light text-lg text-indigo-50">
      {popupAdded.map((element,index) => (
        <div key={index} className=" bg-slate-500 p-3 rounded-md bg-opacity-80 z-50">
          <p>Added {element.title} to cart!</p>
        </div>
      ))}
    </article>
  );
};

export default AddItemsComponent;
