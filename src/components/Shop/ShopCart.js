import React from 'react';

const ShopCart = (props) => {
   return (
      <section className="mt-5">
         <div className="row">
            <div className="col-md-6">
               <h2 className="reservation-text">Calculate Shipping</h2>
               <div className="mt-5">
                     <div className="form-group mx-auto">
                           <input type="text" className="form-control" name="name" placeholder="Country"/>
                     </div>
                     <div className="form-group mx-auto">
                           <input type="text" className="form-control" name="name" placeholder="State"/>
                     </div>
                     <div className="form-group mx-auto">
                           <input type="text" className="form-control" name="name" placeholder="Zip/Code"/>
                     </div>
               </div>
               <button className="button-class mt-4 ms-auto">Update Tools</button>
            </div>
            <div className="col-md-6">
               <h2 className="mb-5 reservation-text">Cart Total</h2>
                  <table className="reservation-text">
                     <tr>
                        <th>Cart Subtotal</th>
                        <th>$134.45</th>
                        
                     </tr>
                     
                     <tr>
                        <th>Shipping and Handling</th>
                        <th>Free shipping</th>
                        
                     </tr>
                     <tr>
                        <th>Order Total</th>
                        <th>$145</th>
                     </tr>
                  </table>
                  <button className="button-class mt-4 ms-auto">Proceed To Checkout</button>
            </div>
         </div>
      </section>
   );
};

export default ShopCart;