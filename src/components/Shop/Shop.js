import React from 'react';
import food1 from '../../Image By Roni/food1.jpg'
import food2 from '../../Image By Roni/food2.jpg'
import ShopCart from '../Shop/ShopCart'

const shops = [
   {
      name: "The Innovators Dilemma",
      img: food1,
      price: "34",
      available: "Available Now",
   },
   {
      name: "Good to great Look",
      img: food2,
      price: "34",
      available: "Available Now",
   },

]

const Shop = () => {

   return (
      <section className="container">
         <h2>Shop</h2>
         <div>
            <table>
            <tr>
               <th>Product</th>
               <th>Quantity</th>
               <th>Available</th>
               <th>Price</th>
               <th>Total</th>
            </tr>
            
            <tr>
               <th>Hello</th>
               <th>345</th>
            </tr>
            </table>
         </div>
         <button className="button-class mt-4 ms-auto">Apply Coupon</button>
         <ShopCart></ShopCart>
      </section>
   );
};

export default Shop;