const TableHead = () => {
  return (
    <thead className="">
      <tr className="flex items-center gap-6 justify-between border-b-2 border-slate-200 p-4 text-slate-500">
        <th className="font-normal flex-none text-left">
          <input className="accent-red-500 w-4 h-4 align-middle" type="checkbox" />
        </th>
        <th className="font-normal text-lg flex-1 text-left">
          <span>Name</span>
        </th>
        <th className="font-normal text-lg flex-1 text-left">
          <span>Email</span>
        </th>
        <th className="font-normal text-lg flex-1 text-left">
          <span>Role</span>
        </th>
        <th className="font-normal text-lg flex-1 text-left">
          <span>Actions</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
