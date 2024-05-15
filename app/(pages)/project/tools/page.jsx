"use client"
import React from "react";
import { useSearchParams } from "next/navigation";

function Tools() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }
  return (
    <div>
      <button className='bg-danger' onClick={() => updateSorting("asc")}>Sort Ascending</button>
      <button className='bg-danger' onClick={() => updateSorting("desc")}>Sort Descending</button>
    </div>
  );
}

export default Tools;
