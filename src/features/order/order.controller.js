
export default class OrderController {
//   constructor() {
//     this.orderRepository = new OrderRepository();
//   }

  async placeOrder(req, res, next) {
    try {
      const userId = req.userID;
      await placeOrder(userId);
      res.status(201).send("Order is created");
    } catch (err) {
      console.log(err);
      return res.status(200).send("Something went wrong");
    }
  }
}
