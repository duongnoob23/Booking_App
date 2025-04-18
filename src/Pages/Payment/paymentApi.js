import axios from "axios";
import { API_BASE_URL1 } from "../../Constant/Constant";

const paymentApi = {
  async createPayment(orderId, amount) {
    try {
      const request = JSON.stringify({ orderID: orderId ?? "1", amount });
      console.log("REQUEST", request);
      const response = await fetch(
        `${API_BASE_URL1}/api/payment/create_order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderId: "1", amount: 100000 }),
        }
      );

      const data = await response.json();
      console.log(">>>> data", data);
      return data; // Trả về { order_url, ... }
    } catch (error) {
      console.log("Error creating payment:", error);
      throw new Error(
        error.response?.data?.message || "Không thể tạo thanh toán"
      );
    }
  },
};

export default paymentApi;
