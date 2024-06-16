import "../styles/Pagination.css";

export function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const firstPage = 1;
  const lastPage = totalPages.length;
  const perPage = 3;

  const currentElements = totalPages.slice(currentPage - 1, (currentPage + perPage) - 1);
  
  if (currentElements[currentElements.length - 1] === lastPage) currentElements.pop();

  function handleNextPage() {
    if (currentPage === lastPage) return;
    setCurrentPage(currentPage + 1);
  }

  function handlePrevPage() {
    if (currentPage === firstPage) return
    setCurrentPage(currentPage - 1);
  }


  return (
    <div className="pagination-wrapper">
      <button type="button" onClick={handlePrevPage}>Anterior</button>
      {currentPage !== firstPage && (
        <>
          <span className="pagination-value" onClick={() => setCurrentPage(1)}>{firstPage}</span>
          <span>...</span>
        </>
      )}
      {currentElements.map(p => (
        <span key={p} className="pagination-value" onClick={() => setCurrentPage(p)}>{p}</span>
      ))}
      {currentPage < lastPage - perPage && <span>...</span>}
      <span className="pagination-value" onClick={() => setCurrentPage(lastPage)}>{lastPage}</span>
      <button type="button" onClick={handleNextPage}>Próximo</button>
    </div>
  )
}

// 1 [2 3 4] 5 6 7 8 9
// 0 [1 2 3 4] 5 6 7 8 9