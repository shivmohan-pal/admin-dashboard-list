import TableRow from "./TableRow"
import TableHead from "./TableHead";

const Table = ()=>{
    return (
        <table className="flex flex-col border-2 border-slate-200 border-collapse rounded-lg font-sans">
        <TableHead />
        <tbody>
        <TableRow />
        <TableRow />
        </tbody>
        </table>
    );
}

export default Table;