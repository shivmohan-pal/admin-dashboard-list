import { noOfRowsSelected, noOfpages, numbersArray } from "../Config/functions";
import useData from "../Context/DataContext";
import usePagination from "../Context/PaginationContext";

const Pagination = () => {
  const { data: entries } = useData();
  const { pagination, dispatch: pageDispatch } = usePagination();
  const { page } = pagination;
  const { data, searched, filtered } = entries;
  const selectedRows = noOfRowsSelected(searched ? filtered : data);
  const totalRows = searched ? filtered.length : data.length;
  const totalPages = searched ? noOfpages(filtered, 10) : noOfpages(data, 10);

  const firstPage = () => {
    pageDispatch({type:"first"});
  };
  const prevPage = () => {
    pageDispatch({ type: "decrease" });
  };
  const nextPage = () => {
    pageDispatch({ type: "increase", payload: { totalPages } });
  };
  const lastPage = () => {
    pageDispatch({type:"last",payload:{totalPages}});
  };

  return (
    <div className="flex items-center flex-wrap justify-between mt-3 p-2">
      <p className="text-base text-slate-500">
        {selectedRows} of {totalRows} row(s) seleted.
      </p>
      <div className="flex gap-4 items-center flex-wrap">
        <p className="text-base text-slate-900 font-medium">
          Page {page} of {totalPages}
        </p>
        <div className="flex gap-2 items-center">
          <button
            title="first"
            className={`first-page w-8 h-8 border-2 border-slate-200 rounded-md active:opacity-50 ${page===1 ? "opacity-50" : ""} hover:border-slate-900`}
            onClick={firstPage}

          >
            {"<<"}
          </button>
          <button
            className={`previous-page w-8 h-8 border-2 border-slate-200 rounded-md active:opacity-50 ${page===1 ? "opacity-50" : ""} hover:border-slate-900`}
            onClick={prevPage}
          >
            {"<"}
          </button>
          {numbersArray(totalPages).map((c) => (
            <button
              key={c}
              className={`w-8 h-8 border-2 border-slate-200 rounded-md active:opacity-50 ${
                page === c ? "border-slate-900" : ""
              } hover:border-slate-900`}
            >
              {c}
            </button>
          ))}
          <button
            className={`next-page w-8 h-8 border-2 border-slate-200 rounded-md active:opacity-50 ${page===totalPages ? "opacity-50" : ""} hover:border-slate-900`}
            onClick={nextPage}
          >
            {">"}
          </button>
          <button
            title="last"
            className={`last-page w-8 h-8 border-2 border-slate-200 rounded-md active:opacity-50 ${page===totalPages ? "opacity-50" : ""} hover:border-slate-900`}
            onClick={lastPage}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
