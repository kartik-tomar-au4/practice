import React from 'react';

const ShopList = ({ shopList }) => {
    console.log(shopList)
    return(
    <div>
        <h2>Available Shops</h2>
            {
               shopList.length === 0 ? <h3>No Shops Available</h3> : (
               shopList.map(
                   (shop, ind) => <h3 key={ind}>{shop.shopName} - {shop.area} - {shop.category} - {shop.openingDate} - {shop.closingDate}</h3>)
               )
            }
    </div>
)}



export default ShopList;