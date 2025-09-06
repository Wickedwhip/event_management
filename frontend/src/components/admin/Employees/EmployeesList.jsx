import React from "react";

const EmployeesList = () => {
  const employees = [
    { id: 1, name: "Alice Mwangi", role: "Manager" },
    { id: 2, name: "Brian Otieno", role: "Support" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Employees</h2>
      <ul className="space-y-2">
        {employees.map((emp) => (
          <li key={emp.id} className="p-2 border rounded">
            {emp.name} - {emp.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesList;

