import SearchBar from "./Components/SearchBar";
import Table from "./Components/Table";
import TrashIcon from "./Components/icons/TrashIcon";

function App() {
  return (
    <div className="w-100 p-4">
      <div className="flex justify-between mb-3">
        <SearchBar />
        <button
          className="bg-red-500 p-2 border-[1px] border-slate-200 rounded-md disabled:opacity-40 active:opacity-50"
          disabled={true}
        >
          <TrashIcon className="stroke-white w-4 h-4" />
        </button>
      </div>
      <Table />
    </div>
  );
}

export default App;
