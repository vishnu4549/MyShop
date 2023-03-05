const orderHistoryTable = document.getElementById("order-history-table");

// Sample data
const orders = [
  { id: 1, productName: "Product 1", quantity: 2, price: 10, date: "2022-02-28" },
  { id: 2, productName: "Product 2", quantity: 1, price: 15, date: "2022-03-01" },
  { id: 3, productName: "Product 3", quantity: 3, price: 5, date: "2022-03-02" },
];

// Populate the table
orders.forEach((order) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${order.id}</td>
    <td class="product-name">${order.productName}</td>
    <td class="product-quantity">${order.quantity}</td>
    <td class="product-price">$${order.price}</td>
    <td class="order-date">${order.date}</td>
  `;
  orderHistoryTable.appendChild(row);
});
