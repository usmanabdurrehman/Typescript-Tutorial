type Product = {
  isInStock: boolean;
  price: number;
};

type Payment = {
  isMade: boolean;
  price: number;
};

const getPriceMessage = (product: Product, payment: Payment) => {
  if (!product.isInStock) return "Product Not in Stock";
  if (!payment.isMade)
    return "Payment is not made. Sending to the Payment Screen";
  if (payment.price !== product.price) return "Price Mismatch";
  return "Place the order";
};
