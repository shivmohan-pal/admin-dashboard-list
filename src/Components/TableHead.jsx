import { isAllSelected } from "../Config/functions";
import useData from "../Context/DataContext";

const TableHead = () => {
 const {data:entries,dispatch} = useData();
 const {data} = entries;
 
 const checkboxClick = (e)=>{
  const value = e.target.checked;
  if(value){
  dispatch({type:'allCheck',payload: {value}})
  }
  if(isAllSelected(data)){
    dispatch({type:"allUnCheck",payload:{value}});
  }
  dispatch({type:"unlockManyDelete"})
}


  return (
    <thead className="">
      <tr className="flex items-center gap-6 justify-between border-b-2 border-slate-200 p-3 text-slate-500">
        <th className="font-normal flex-none text-left">
          <input id="allCheck" className="accent-red-500 w-4 h-4 align-middle" 
          type="checkbox"
          onChange={checkboxClick}
          // checked={allCheckButton}
           />
        </th>
        <th className="font-normal text-base flex-1 text-left">
          <span>Name</span>
        </th>
        <th className="font-normal text-base flex-1 text-left">
          <span>Email</span>
        </th>
        <th className="font-normal text-base flex-1 text-left">
          <span>Role</span>
        </th>
        <th className="font-normal text-base flex-1 text-left">
          <span>Actions</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
