import React from 'react'

export function Pagination() {
    return (
        <div className="container">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a href="#" className="page-link" aria-label="Previous">
                            &laquo;
                        </a>
                    </li>

                    <li className="page-item">
                        <a href="#" className="page-link">1</a>
                    </li>

                    <li className="page-item">
                        <a href="#" className="page-link">2</a>
                    </li>

                    <li className="page-item">
                        <a href="#" className="page-link">3</a>
                    </li>

                    <li className="page-item">
                        <a href="#" className="page-link" aria-label="Previous">
                            &raquo;
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
