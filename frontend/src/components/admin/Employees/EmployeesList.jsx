
import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";

const sample = [{ id:1, name:"Alice", email:"alice@ex.com", role:"staff" }];

export default function EmployeesList(){
  const [list, setList] = useState(sample);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);

  const save = (e) => {
    if(e.id) setList(list.map(x=> x.id===e.id? e: x));
    else { e.id=Date.now(); setList([e,...list]); }
    setOpen(false); setEdit(null);
  };
  const del = (id) => setList(list.filter(x=>x.id!==id));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Employees</h3>
        <button onClick={()=>setOpen(true)} className="px-4 py-2 rounded-xl bg-amber-400">Add Employee</button>
      </div>

      <div className="space-y-3">
        {list.map(u => (
          <div className="bg-white p-4 rounded-2xl flex justify-between items-center" key={u.id}>
            <div>
              <div className="font-semibold">{u.name}</div>
              <div className="text-sm text-gray-500">{u.email} • {u.role}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={()=>{setEdit(u); setOpen(true);}} className="px-3 py-1 bg-blue-100 text-blue-700 rounded">Edit</button>
              <button onClick={()=>del(u.id)} className="px-3 py-1 bg-red-100 text-red-600 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {open && <EmployeeForm existing={edit} onClose={()=>{setOpen(false); setEdit(null);}} onSave={save} />}
    </div>
  );
}
