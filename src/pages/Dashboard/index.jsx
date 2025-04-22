import React, { useRef, useState } from "react";
import "./style.css";
import Navbar from "../../components/Navbar/index.jsx";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { categories, orders, products } from "../../data/pos.js";
import ImageOne from "../../assets/images/image1.jpg";
import ImageTwo from "../../assets/images/image2.jpg";
import ImageThree from "../../assets/images/image3.jpeg";
import ImageFour from "../../assets/images/image4.jpg";
import ImageFive from "../../assets/images/image5.jpeg";
import ImageSix from "../../assets/images/image6.jpeg";
import Avatar from "../../assets/images/avatar.jpeg";
import { CiFilter } from "react-icons/ci";
import { CgPushRight } from "react-icons/cg";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function index() {
  const sliderRef = useRef(null);
  const sliderTwoRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);

  const scrollSlider = (amount) => {
    console.log("Amount:", amount);
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const scrollSliderTwo = (amount) => {
    console.log("Amount:", amount);
    if (sliderTwoRef.current) {
      sliderTwoRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const renderImage = (name) => {
    const dynamicImgae = require(`../../assets/images/${name}.jpg`);
    return dynamicImgae;
  };
  return (
    <>
      {/* <!-- Main Content --> */}

      <div className="main-content">
        <Navbar />
        <div className="container-fluid my-2 mx-1">
          {/* <h4 className="mb-3">Order List</h4> */}
          <div className="order-slider-container mt-0 pt-0">
            <div className="d-flex justify-content-between p-0 m-0 align-items-center">
              <div className="dashboard-header">Order List</div>
              <div className="d-flex d-inline-block d-flex justify-content-end p-0 m-0 align-items-center">
                <div
                  className="nav-icon border d-inline-block d-flex justify-content-center align-items-center"
                  onClick={() => {
                    scrollSlider(-300);
                  }}
                >
                  <FaAngleLeft />
                </div>

                <div
                  className="nav-icon ms-3 border d-inline-block d-flex justify-content-center align-items-center"
                  onClick={() => {
                    scrollSlider(300);
                  }}
                >
                  <FaAngleRight />
                </div>
              </div>
            </div>

            {/* <!-- Order Slider --> */}
            <div
              id="orderSlider"
              className="order-slider hide-scrollbar mt-0"
              ref={sliderRef}
            >
              {orders.map((orders, index) => (
                <div className="order-card py-2" key={index}>
                  <div
                    className={`order-tag ${
                      orders.status === "Ready" ? "bg-danger" : "bg-primary"
                    }`}
                  >
                    {orders.table}
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between p-0 m-0 align-items-center">
                      <div className="customer-text">{orders.customer}</div>
                      <span
                        className={`badge py-2 ${
                          orders.status === "Ready"
                            ? "bg-color-green"
                            : "bg-warning text-dark"
                        } mt-1 `}
                      >
                        {orders.status === "Ready"
                          ? "✓ Ready"
                          : "⏱ In progress"}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between p-0 m-0 align-items-center mt-2">
                      <small className="order-sm-text">
                        {orders.items} items
                      </small>
                      <div className="text-muted small mt-1">
                        <span
                          className={`badge ${
                            orders.status === "Ready"
                              ? "bg-color-green"
                              : "bg-warning text-dark"
                          }`}
                        >
                          {orders.statusText}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-slider-container mt-0 pt-0">
            <div className="d-flex justify-content-between p-0 m-0 align-items-center">
              <div className="dashboard-header">Categories</div>
              <div className="d-flex d-inline-block d-flex justify-content-end p-0 m-0 align-items-center">
                <div
                  className="nav-icon border d-inline-block d-flex justify-content-center align-items-center"
                  onClick={() => {
                    scrollSliderTwo(-300);
                  }}
                >
                  <FaAngleLeft />
                </div>

                <div
                  className="nav-icon ms-3 border d-inline-block d-flex justify-content-center align-items-center"
                  onClick={() => {
                    scrollSliderTwo(300);
                  }}
                >
                  <FaAngleRight />
                </div>
              </div>
            </div>

            {/* <!-- Order Slider --> */}
            <div
              id="orderSlider"
              className="order-slider hide-scrollbar mt-0"
              ref={sliderTwoRef}
            >
              {categories.map((category, index) => (
                <div
                  className={`category-card d-inline-block align-middle border p-2 ${
                    activeTab === category?.id ? "bg-color-green" : ""
                  }`}
                  key={index}
                  onClick={() => setActiveTab(category?.id)}
                >
                  <div className="category-icon">{category.image}</div>
                  <div
                    className={`category-name color-light-gray-11 ${
                      activeTab === category?.id ? "text-white" : ""
                    }`}
                  >
                    {category.name}
                  </div>
                  <div
                    className={`category-count color-light-gray-11 ${
                      activeTab === category?.id ? "text-white" : ""
                    }`}
                  >
                    {category.items} items
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div class="row m-3">
          <div className="d-flex justify-content-between p-0 m-0 align-items-center">
            <div className="dashboard-header">Special menu for you</div>
            <div className="d-flex d-inline-block d-flex justify-content-end p-0 m-0 align-items-center">
              <div
                className=" d-inline-block d-flex justify-content-center align-items-center"
                onClick={() => {}}
              >
                <CiFilter />
              </div>

              <div
                className="ms-2  d-inline-block d-flex justify-content-center align-items-center fw-semibold"
                onClick={() => {}}
              >
                Filter
              </div>
            </div>
          </div>
          {products.map((product, index) => {
            return (
              <div
                class="col-xs-12 col-sm-6 col-md-3 col-lg-3 my-3"
                key={index}
              >
                <div className="border-0 product-card position-relative">
                  <div className="position-absolute product-top-left-badge">
                    20% OFF
                  </div>

                  <div className="position-absolute product-bottom-right-badge">
                    Recommendation
                  </div>
                  <img
                    className="product-img"
                    src={
                      product.id === 1
                        ? ImageOne
                        : product.id === 2
                        ? ImageTwo
                        : product.id === 3
                        ? ImageThree
                        : product.id === 4
                        ? ImageFour
                        : product.id === 5
                        ? ImageFive
                        : ImageSix
                    }
                    class="card-img-top"
                    alt="Tacos Salsa"
                  />
                </div>
                <div>
                  <div class="product-title color-light-gray-11 mt-1">
                    {product.name}
                  </div>
                  <div class="product-price text-dark">${product.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <!-- Fixed Right Sidebar --> */}
      <div className="right-sidebar m-0 p-0">
        {/* <div className="sidebar-header d-flex my-0 py-2">
          <img src={Avatar} className="avatar-img border" alt="avatar" />
          <div className="d-inline-block ms-3">
            <div className="profile-name-text m-0 p-0">Casey Kaspol</div>
            <div className="designation-text color-light-gray-11 p-0 m-0">
              Cashier
            </div>
          </div>
        </div> */}
        <div className="sidebar-body">
          <div className="d-flex justify-content-between p-0 my-3 align-items-center">
            <div className="order-detail-txt">Order Details</div>
            <div className="order-detail-txt">
            <CgPushRight />
            <HiOutlineDotsVertical size={16} className="ms-2"/>
            </div>
          </div>
          <div>
            <div className="cart-desc-title">Recient:Yolanda Tamara</div>
            <div className="cart-desc-txt color-light-gray-11">
              Mon, Oct 16 2022 12:00
            </div>
            <div className="cart-desc-txt color-light-gray-11">
              #08202200001
            </div>
          </div>
          <hr class="flex-grow-1 border-gray-100" />
          <div className="d-flex justify-content-between p-0 m-0 align-items-center">
            <div className="inline-block d-inline-block d-flex justify-content-start align-items-center cart-title-txt">
              <div className="qty-box">2X</div>
              <div className="cart-product-title ms-2">Double Chees Burger</div>
            </div>
            <div className="cart-product-price">$24.56</div>
          </div>
          <hr class="flex-grow-1 border-gray-100" />
          <div className="d-flex justify-content-between py-1 m-0 align-items-center">
            <div className="cart-product-title cart-title-txt">
              Double Chees Burger
            </div>
            <div className="cart-product-price cart-title-txt">$12.28</div>
          </div>

          <div className="d-flex justify-content-between py-1 m-0 align-items-center">
            <div className="cart-product-title cart-title-txt">
              Double Chees Burger
            </div>
            <div className="cart-product-price cart-title-txt">$12.28</div>
          </div>

          <div className="batch-group row mt-1">
            <div className=" col-6 ">
              <div className="discount-batch color-light-gray-11 bg-color-pink mb-1 px-2">
                Extra pickles + 0.$72
              </div>
            </div>
            <div className=" col-6 ">
              <div className="discount-batch color-light-gray-11 bg-color-pink mb-1 px-2">
                1 Remove lettuce
              </div>
            </div>
            <div className="col-6 ">
              <div className=" discount-batch color-light-gray-11 bg-color-pink mb-1 px-2">
                1 Remove tomatoes
              </div>
            </div>
          </div>
          <hr class="flex-grow-1 border-gray-100" />
          <div className="d-flex justify-content-between p-0 m-0 align-items-center">
            <div className="inline-block d-inline-block d-flex justify-content-start align-items-center cart-title-txt">
              <div className="qty-box">1X</div>
              <div className="cart-product-title ms-2">
                Package burger and french fries
              </div>
            </div>
            <div className="cart-product-price">$19.56</div>
          </div>
          <hr class="flex-grow-1 border-gray-100" />

          <div className="d-flex justify-content-between py-1 m-0 align-items-center">
            <div className="cart-product-title cart-title-txt">
              Package burger and french fries
            </div>
            <div className="cart-product-price cart-title-txt">$19.28</div>
          </div>
          <div className="batch-group row mt-1">
            <div className=" col-6 ">
              <div className="discount-batch color-light-gray-11 bg-color-pink mb-1 px-2">
                Extra pickles + 0.$72
              </div>
            </div>
          </div>
          <hr class="flex-grow-1 border-gray-100" />
          <div className="d-flex justify-content-between py-1 m-0 align-items-center">
            <div className="cart-product-title cart-title-txt">Subtotal</div>
            <div className="cart-product-price cart-title-txt">$39.12</div>
          </div>
          <div className="d-flex justify-content-between py-1 m-0 align-items-center">
            <div className="cart-product-title cart-title-txt">Tax 10%</div>
            <div className="cart-product-price cart-title-txt">$1.05</div>
          </div>
          <div className="d-flex justify-content-between py-1 m-0 align-items-center">
            <div className="cart-product-title cart-title-txt">
              Discount 20%
            </div>
            <div className="cart-product-price cart-title-txt">$3.91</div>
          </div>
          <hr class="flex-grow-1 border-gray-100" />
          <div className="d-flex justify-content-between py-1 m-0 mb-4 align-items-center">
            <div className="cart-product-title cart-title-txt">Total</div>
            <div className="cart-product-price cart-title-txt">$44.08</div>
          </div>

          <button className="btn btn-green w-100 mt-3 border-0 rounded-0">
            Pay $44.08
          </button>
        </div>
      </div>
    </>
  );
}
