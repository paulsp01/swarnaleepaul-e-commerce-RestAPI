import UserModel from '../user/user.model.js';

export default class ProductModel {
  constructor(id, name, desc, price, imageUrl, category, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    this.sizes = sizes;
  }

  static add(product) {
    product.id = products.length + 1;
    products.push(product);
    return product;
  }

  static get(id) {
    const product = products.find((i) => i.id == id);
    return product;
  }

  static getAll() {
    return products;
  }

  static filter(minPrice, maxPrice, category) {
    const result = products.filter((product) => {
      return (
        ( product.price >= minPrice) &&
        ( product.price <= maxPrice) &&
        (product.category == category)
      );
    });
    return result;
  }

  static rateProduct(userID,productID,rating){
   const user=UserModel.getAll().find((u)=>u.id==userID);
   if(!user){
    return 'user not found';
   }
   const product=products.find((p)=>p.id==productID);
   if(!product){
    return 'product is not found';
   }
   if(!product.ratings){
   product.ratings=[];
   product.ratings.push({userID:userID,rating:rating});
   }else{
    const existingRatingIndex=product.ratings.findIndex((r)=>r.userID==userID);
    if(existingRatingIndex>=0){
      product.ratings[existingRatingIndex]={
        userID:userID,
        rating:rating
      };
    }else{
      product.ratings.push({ userID: userID, rating: rating });
    }
   }
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    "Category1"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    29.99,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    "Category2",
    ["M", "XL"]
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    39.99,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg",
    "Category3",
    ["M", "XL", "S"]
  ),
];
