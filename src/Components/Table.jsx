import TableRow from "./TableRow";
import TableHead from "./TableHead";
import useData from "../Context/DataContext";
import usePagination from "../Context/PaginationContext";

const Table = () => {
  const { data: entries } = useData();
  const { pagination } = usePagination();
  const { page } = pagination;
  const { data, filtered, searched } = entries;

  const slicedData = data.slice(page * 10 - 10, page * 10);
  const slicedFilered = filtered.slice(page * 10 - 10, page * 10);

  return (
    <table className="relative flex flex-col border-2 border-slate-200 border-collapse rounded-lg font-sans">
      <TableHead displayedData={filtered.length? slicedFilered:slicedData} />
      <tbody>
        {filtered.length ? (
          slicedFilered.map((row) => <TableRow key={row.id} {...row} />)
        ) : !searched && data.length ? (
          slicedData
            .slice(page * 10 - 10, page * 10)
            .map((row) => <TableRow key={row.id} {...row} />)
        ) : (
          <tr>
            <td>not found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
