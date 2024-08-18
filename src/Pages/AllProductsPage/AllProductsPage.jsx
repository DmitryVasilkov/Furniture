import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Slice/CartSlice';
import s from './AllProductsPage.module.css'
import filterIcon from './img/filter-icon.png';
import chair from './img/Chair.png'
import table from './img/Table.png'
import arrow from './img/Arrow.png'
import NavbarDark from '../../Components/NavbarDark/NavbarDark'
import Eyebrow from '../../Components/Eyebrow/Eyebrow'
import Footer from '../../Components/Footer/Footer'
import FilterModal from '../../Components/FilterModal/FilterModal';
import CartModal from '../../Components/CartModal/CartModal';

function AllProductsPage({ productsCount }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleFilterClick = () => {
    setIsModalOpen(true);
  };

  const handleApplyFilter = () => {
    applyFilter(selectedCategories);
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchProducts = () => {
    fetch("http://localhost:3000/server")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error("Products data is not an array");
        }
      })
      .catch(error => setError(error));
  };

  const applyFilter = (categories) => {
    setSelectedCategories(categories);
    fetch("http://localhost:3000/Server/filter", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({categories})
    })
    .then(response => {
      if(!response.ok){
        throw new Error("network response was failed")
      }
      return response.json()
    })
    .then(data => setProducts(data))
    .catch(error => setError(error));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setIsCartOpen(true);  
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  const array = ["Living Room", "Bedroom", "Dining Room", "Bathroom", "Office", "Kitchen", "Kids Room", "Hallway", "Storage"];

  return (
    <>
      <Eyebrow />
      <NavbarDark />
      <div className={s.goods}>
        <span />
        <p>Goods</p>
        <span />
      </div>
      <div className={s.productsWrapper}>
        <div className={s.filters}>
          <h2>Filter</h2>
          <span />
          <ul>
            <h3>Availiability</h3>
            <li>
              <input type="checkbox" />
              <label>In stock</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Out of stock</label>
            </li>
          </ul>
          <ul>
            <h3>Product Categories</h3>
            {array.map((category) => (
              <li key={category}>
                <input type="checkbox" checked = {selectedCategories.includes(category)} onChange={() => {
                  if(selectedCategories.includes(category)){
                    setSelectedCategories(selectedCategories.filter(cat => cat !== category))
                  } else{
                    setSelectedCategories([...selectedCategories, category])
                  }
                }}/>
                {category}
              </li>
            ))}
            <button>+Show more</button>
            <button onClick={handleApplyFilter}>Apply</button>
          </ul>
          <ul>
            <h3>Product Type</h3>
            <li>
              <input type="checkbox" />
              <label>Sofas</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Armchairs</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Tables</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Chairs</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Beds</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Wardrobes</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Trestles</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Bedside tables</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Coffee table</label>
            </li>
            <button>+Show more</button>
          </ul>
        </div>
        <div className={s.sortProducts}>
          <div className={s.container}>
            <button className={s.filterButton} onClick={handleFilterClick}>
              <img src={filterIcon} alt="Filter Icon" className={s.icon} />
              Filter
            </button>
            <div className={s.productsCount}>
              <span>{productsCount} products</span>
            </div>
          </div>
          {isModalOpen && <FilterModal closeModal={closeModal} applyFilter={applyFilter} />}
          <div className={s.sorting}>
            <div>
              <p>34 products</p>
            </div>
            <div className={s.sortBy}>
              <p>Sort by:</p>
              <select>
                <option value="">Best selling</option>
                <option value="">From A to Z</option>
                <option value="">From Z to A</option>
                <option value="">From lover to higher price</option>
                <option value="">From higher to lover price</option>
              </select>
            </div>
          </div>
          {error ? (
            <div>error: {error.message}</div>
          ) : (
            <div className={s.productsContainer}>
              {Array.isArray(products) && products.length > 0 ? (
                products.map(product => (
                <div key={product.id}>
                  <img style={{ height: "150px", width: "150px" }} src={`http://localhost:3000${product.image}`} alt={product.name} />
                  <h3>{product.name}</h3>
                  <h6>{product.description}</h6>
                  <p>{product.price}$</p>
                  <button onClick={() => handleAddToCart(product)}>Buy</button>
                </div>
              ))
              ) : <div>No products available</div>
            }
            </div>
          )}
          <div className={s.pages}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>...</button>
            <a href="#">
              <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <CartModal isOpen={isCartOpen} closeCart={closeCart} cartItems={cartItems} />
    </>

  )
}

export default AllProductsPage;