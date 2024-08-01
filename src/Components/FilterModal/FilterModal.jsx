import React, { useState } from 'react';
import s from './FilterModal.module.css';

const FilterModal = ({ closeModal, applyFilter }) => {

    const [selectedCategories, setSelectedCategories] = useState([])

    const handleChangeCategory = (category) => {
      setSelectedCategories((prevCategory) => prevCategory.includes(category) ? prevCategory.filter((cat) => cat !== category) : [...prevCategory, category] 
      )
    }

    const handleApplyFilter = () => {
      applyFilter(selectedCategories)
      closeModal()
    }

    return (
    <div className={s.modalOverlay} onClick={closeModal}>
      <div className={s.modalContent} onClick={e => e.stopPropagation()}>
        <div className={s.modalHeader}>
          <h2>Filter</h2>
          <button className={s.closeButton} onClick={closeModal}>X</button>
        </div>
        <div className={s.filterOptions}>
          <h3>Availability</h3>
          <ul>
            <li><input type="checkbox" /> In Stock</li>
            <li><input type="checkbox" /> Out of stock</li>
          </ul>
          <h3>Product Categories</h3>
          <ul>
            {/* <li><input type="checkbox" /> Living Room</li>
            <li><input type="checkbox" /> Bedroom</li>
            <li><input type="checkbox" /> Dining Room</li>
            <li><input type="checkbox" /> Bathroom</li>
            <li><input type="checkbox" /> Office</li>
            <li><input type="checkbox" /> Kitchen</li>
            <li><input type="checkbox" /> Kids Room</li>
            <li><input type="checkbox" /> Hallway</li>
            <li><input type="checkbox" /> Storage</li> */}
            {["Living Room", "Bedroom", "Dining Room", "Bathroom", "Office", "Kitchen", "Kids Room", "Hallway", "Storage"].map((category) => (
              <li key={category}>
                <input type="checkbox" checked = {selectedCategories.includes(category)} onChange={() => handleChangeCategory(category)}/>
                {category}
              </li>
            ))}
            <li className={s.showMore}>+Show more</li>
          </ul>
          <button onClick={handleApplyFilter}>Apply</button>
          <h3>Product Type</h3>
          <ul>
            <li><input type="checkbox" /> Sofas</li>
            <li><input type="checkbox" /> Armchairs</li>
            <li><input type="checkbox" /> Tables</li>
            <li><input type="checkbox" /> Chairs</li>
            <li><input type="checkbox" /> Beds</li>
            <li><input type="checkbox" /> Wardrobes</li>
            <li><input type="checkbox" /> Trestles</li>
            <li><input type="checkbox" /> Bedside tables</li>
            <li><input type="checkbox" /> Coffee table</li>
            <li className={s.showMore}>+Show more</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
