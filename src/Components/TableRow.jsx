import TrashIcon from "./icons/TrashIcon";
import EditIcon from "./icons/EditIcon";
import useData from "../Context/DataContext";
import { useState } from "react";
import SaveIcon from "./icons/SaveIcon";

const TableRow = ({ id, name, email, role, isChecked }) => {
  const [edit, setEdit] = useState(false);
  const [editForm, setEditForm] = useState({name,email,role});
  const { dispatch } = useData();
  
  const handleChange =(e)=>{
    const {value,name} = e.target;
    setEditForm((prev)=>{
      return {...prev,[name]:value}
    });
  }
  const editClick = ()=>{
   dispatch({type:"edit",payload:{id,editForm}})
   setEdit(false);
  }
  const checkboxClick = (e) => {
    const value = e.target.checked;
    dispatch({ type: "check", payload: { id, value } });
    dispatch({ type: "unlockManyDelete" });
  };
  const removeClick = (id) => {
    dispatch({ type: "remove", payload: { id } });
  };

  return (
    <tr
      className={`flex items-center gap-6 justify-between border-b-2 border-slate-200 p-3 ${
        isChecked ? "bg-slate-100" : ""
      } text-slate-950 last:border-none`}
    >
      <td className="font-normal flex-none">
        <input
          className="accent-red-500 w-4 h-4 align-middle"
          type="checkbox"
          name="checkbox"
          onChange={checkboxClick}
          checked={isChecked}
        />
      </td>
      <td className="font-normal text-base flex-1 ">
        {edit ? <input className="bg-slate-200 rounded-md px-2" type="text" name="name" onChange={handleChange} value={editForm.name} /> : <span>{name}</span>}
      </td>
      <td className="font-normal text-base flex-1 ">
        {edit ? <input className="bg-slate-200 rounded-md px-2" type="email" name="email" onChange={handleChange} value={editForm.email} /> : <span>{email}</span>}
      </td>
      <td className="font-normal text-base flex-1 ">
        {edit ? <input className="bg-slate-200 rounded-md px-2" type="text" name="role" onChange={handleChange} value={editForm.role} /> : <span>{role}</span>}
      </td>
      <td className="flex gap-2 font-normal flex-1 ">
        {edit ? (
          <button
            className="edit p-2 border-[1px] border-slate-200 rounded-md active:opacity-50"
            onClick={editClick}
          >
            <SaveIcon className="stroke-green-700 w-5 h-5" />
          </button>
        ) : (
          <button
            className="edit p-2 border-[1px] border-slate-200 rounded-md active:opacity-50"
            onClick={() => {
              setEdit(true);
            }}
          >
            <EditIcon className="stroke-slate-950 w-5 h-5" />
          </button>
        )}
        <button
          className="delete p-2 border-[1px] border-slate-200 rounded-md active:opacity-50"
          onClick={() => {
            removeClick(id);
          }}
        >
          <TrashIcon className="stroke-red-500 w-5 h-5" />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
