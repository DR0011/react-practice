import React, { useState } from "react";

function SearchFilter() {
  const items = ["Apple", "Banana", "Mango", "Orange"];

  const [search, setSearch] = useState("");

  // Filter logic
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Search Filter</h2>

      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {filteredItems.map((item, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
