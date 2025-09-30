

const Pagination = ({ currentPage, totalPages, onPageChange, maxButtons = 5 }) => {
  if (totalPages === 1) return null;

  const handle = (p) => (e) => {
    e.preventDefault();
    if (p !== currentPage) onPageChange(p);
  };

  // sliding window for page numbers
  const half = Math.floor(maxButtons / 2);
  let start = Math.max(1, currentPage - half);
  let end = Math.min(totalPages, start + maxButtons - 1);
  if (end - start < maxButtons - 1) start = Math.max(1, end - maxButtons + 1);

  const pages = [];
  for (let p = start; p <= end; p++) pages.push(p);

  return (
    <nav aria-label="Pagination">
  <ul
    style={{
      display: "flex",
      gap: 10,
      listStyle: "none",
      justifyContent: "center",
      padding: 0,
    }}
  >
    <li>
      <button
        onClick={handle(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: currentPage === 1 ? "#f1f1f1" : "#fff",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        Prev
      </button>
    </li>

    {start > 1 && (
      <>
        <li>
          <button
            onClick={handle(1)}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            1
          </button>
        </li>
        {start > 2 && <li style={{ alignSelf: "center" }}>…</li>}
      </>
    )}

    {pages.map((p) => (
      <li key={p}>
        <button
          onClick={handle(p)}
          style={{
            padding: "6px 14px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            background: p === currentPage ? "#007bff" : "#fff",
            color: p === currentPage ? "#fff" : "#333",
            fontWeight: p === currentPage ? "700" : "400",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {p}
        </button>
      </li>
    ))}

    {end < totalPages && (
      <>
        {end < totalPages - 1 && <li style={{ alignSelf: "center" }}>…</li>}
        <li>
          <button
            onClick={handle(totalPages)}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            {totalPages}
          </button>
        </li>
      </>
    )}

    <li>
      <button
        onClick={handle(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: currentPage === totalPages ? "#f1f1f1" : "#fff",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        Next
      </button>
    </li>
  </ul>
</nav>
  )}


export default Pagination;
