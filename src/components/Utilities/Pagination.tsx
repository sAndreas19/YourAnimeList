import { scrollToTop } from "./ScrollToTop"

const Pagination = ({ page, maxPage, setPage }: {page: number, maxPage: number, setPage: any}) => {

  const handlePrevPage = () => {
    if(page < 1) return;
    setPage((currentPage: number) => currentPage - 1)
    scrollToTop()
  }

  const handleNextPage = () => {
    if(page > maxPage) return;
    setPage((currentPage: number) => currentPage + 1)
    scrollToTop()
  }

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-6 text-2xl font-display text-primary">
      <button onClick={handlePrevPage} disabled={page <= 1} className="transition-all cursor-pointer hover:text-secondary">&lt;&lt;Prev</button>
      <p>Page {page} of {maxPage}</p>
      <button onClick={handleNextPage} disabled={page >= maxPage} className="transition-all cursor-pointer hover:text-secondary">Next&gt;&gt;</button>  
    </div>
  )
}

export default Pagination