import {
  db,
  serverTimestamp,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
  getDocs,
  where
} from "./firebase-config.js";

const ORDERS_COLLECTION = "orders";
const USERS_COLLECTION = "admin_users";
const SALES_COLLECTION = "sales";
const LOGS_COLLECTION = "logs";
const CASH_CLOSINGS_COLLECTION = "cash_closings";

export async function createOrder(orderData) {
  const payload = {
    ...orderData,
    status: orderData.status || "Nuevo",
    saleClosed: orderData.saleClosed || false,
    deleted: orderData.deleted || false,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };

  return await addDoc(collection(db, ORDERS_COLLECTION), payload);
}

export function listenOrders(callback) {
  const q = query(collection(db, ORDERS_COLLECTION), orderBy("createdAt", "desc"));

  return onSnapshot(q, (snapshot) => {
    const orders = snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data()
    }));
    callback(orders);
  });
}

export async function updateOrder(orderId, patch) {
  const ref = doc(db, ORDERS_COLLECTION, orderId);
  await updateDoc(ref, {
    ...patch,
    updatedAt: serverTimestamp()
  });
}

export async function createSale(saleData) {
  return await addDoc(collection(db, SALES_COLLECTION), {
    ...saleData,
    createdAt: serverTimestamp()
  });
}

export async function createLog(logData) {
  return await addDoc(collection(db, LOGS_COLLECTION), {
    ...logData,
    createdAt: serverTimestamp()
  });
}

export async function createCashClosing(data) {
  return await addDoc(collection(db, CASH_CLOSINGS_COLLECTION), {
    ...data,
    createdAt: serverTimestamp()
  });
}

export async function getUsersByUsername(username) {
  const q = query(
    collection(db, USERS_COLLECTION),
    where("username", "==", username)
  );
  const snap = await getDocs(q);
  return snap.docs.map((item) => ({
    id: item.id,
    ...item.data()
  }));
}
