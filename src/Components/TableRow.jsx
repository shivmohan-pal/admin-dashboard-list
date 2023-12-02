import TrashIcon from "./icons/TrashIcon";
import EditIcon from "./icons/EditIcon";

const TableRow = () => {
  return (
    <tr className="flex items-center gap-6 justify-between border-b-2 border-slate-200 p-4 text-slate-950 last:border-none">
      <td className="font-normal flex-none">
        <input
          className="accent-red-500 w-4 h-4 align-middle"
          type="checkbox"
          checked={false}
        />
      </td>
      <td className="font-normal text-base flex-1 ">
        <span>Name</span>
      </td>
      <td className="font-normal text-base flex-1 ">
        <span>Email</span>
      </td>
      <td className="font-normal text-base flex-1 ">
        <span>Role</span>
      </td>
      <td className="flex gap-2 font-normal flex-1 ">
        <button className="p-2 border-[1px] border-slate-200 rounded-md active:opacity-50">
          <EditIcon className="stroke-slate-950" />
        </button>
        <button className="p-2 border-[1px] border-slate-200 rounded-md active:opacity-50">
          <TrashIcon className="stroke-red-500" />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
