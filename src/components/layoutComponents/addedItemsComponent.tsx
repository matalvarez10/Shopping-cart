import { IPopupData } from "../../interfaces/popupData.interface";

const AddItemsComponent = ({ popupAdded }: { popupAdded: IPopupData[] }) => {
  return (
    <article className="fixed top-20 right-0 m-3 flex flex-col gap-2">
      {popupAdded.map((element) => (
        <div className="text-lg text-indigo-50 bg-gray-900 p-3 rounded-md bg-opacity-80">
          <p>Added {element.title} to cart!</p>
        </div>
      ))}
    </article>
  );
};

export default AddItemsComponent;
