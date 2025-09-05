import React, { useState } from "react";

const sample = [
  { id:1, name:"Ben", email:"ben@ex.com", purchases:2, paid:true },
  { id:2, name:"Clara", email:"clara@ex.com", purchases:0, paid:false },
];

export default function UsersOverview(){
  const [users] = useState(sample);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Users</h3>
      <div className="bg-white rounded-2xl shadow p-4">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="py-2">Name</th>
              <th>Email</th>
              <th>Purchases</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u=>(
              <tr key={u.id} className="border-t">
                <td className="py-3">{u.name}</td>
                <td>{u.email}</td>
                <td>{u.purchases}</td>
                <td>{u.paid ? <span className="text-green-600 font-semibold">Yes</span> : <span className="text-red-600">No</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

