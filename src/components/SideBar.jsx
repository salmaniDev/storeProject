import React from 'react'
import { createQueryObject } from '../helper/helper';
import { FaListUl } from 'react-icons/fa'

// constants
import { category } from '../constants/menuList';

function SideBar({ setQuery, query }) {
    const categoryHandler = e => {
        const { tagName } = e.target
        const category = e.target.innerText.toLowerCase();

        if (!tagName == 'LI') return
        // setQuery(query => ({ ...query, category }))
        setQuery(query => createQueryObject(query, { category }))
    }
    return (
        <div className="sidebar">
            <div>
                <FaListUl />
                <p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                {
                    category.map(item => (
                        <li key={item.id} className={item.type.toLowerCase() === query.category ? 'selected' : null}>{item.type}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideBar