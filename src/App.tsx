import { rectSortingStrategy } from "@dnd-kit/sortable";
import MultipleContainers from "./MultipleContainers";

function App() {
  return (
    <div className="w-full h-full p-6 flex flex-col gap-4">
      <p className="font-medium text-3xl pb-2 border-border border-b">
        Trello App
      </p>
      <div className="flex-1 overflow-y-auto">
        <MultipleContainers
          itemCount={5}
          strategy={rectSortingStrategy}
          trashable
        />
      </div>
    </div>
  );
}

export default App;
