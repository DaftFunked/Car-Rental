"use server";

import connect from "@/lib/database";
import { sendEmail } from "@/lib/sendEmail";
import Order from "@/models/Order";

export const orderedMail = async (id) => {
  try {
    await connect();
    const getOrder = await Order.findById(id);
    await sendEmail({
      order: getOrder,
      email: getOrder.email,
      subject: "Welcome to Limolux",
      message: `hi there, you have booking`,
    });

    await sendEmail({
      order: getOrder,
      email: "garou9810@gmail.com",
      subject: "Welcome to Limolux",
      message: `hi there, you have booking`,
    });
    return getOrder;
  } catch (error) {}
};