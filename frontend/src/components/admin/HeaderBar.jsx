
import React from "react";

export default function HeaderBar() {
  return (
    <header className="bg-white border-b p-4 flex items-center justify-between">
      <div className="text-lg font-semibold text-gray-800">Dashboard</div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">Admin Joe</div>
        <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">J</div>
      </div>
    </header>
  );
}
