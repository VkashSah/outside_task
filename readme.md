# API Endpoints

A vending machine where one can just insert the coin and get back the
desired drinks. The drinks at the vending machine can be purchased and refunded.

## Specs

- There are only three products available at the moment Coke cost (Rs 20), Pepsi cost (Rs 25), and Dew cost (Rs 30).
- If the currency entered is less than the actual cost the vending machine should not process further.
- If the amount entered is higher than the actual cost the vending machine should calculate the cost and return the change.
- When purchased the stock of item should be decreased and the amount of coins should increase.
- The items can be refunded which will increase the item stock and decrease the amount of coin.
- Initial stock for items Coke 10, Pepsi 10, Dew 10 and the initial amount of total coins 100
- Consider the cases when the vending machine is out of coins or out of the products.
- People can enter any amount of coin so there are no any restriction but however we will be planning to accept cash (You do not need to implement cash payment) in future. Code is flexible enough for future features too.

## Installation

System Requirement:

- Node
- MongoDB

Git Clone

```bash
  git clone --repo
```

Go to the project directory

```bash
  cd outside_task
```

- create .env file with contents from .env_sample or leave it as it is to run locally with default mongoDB connection `mongodb://localhost/vending_machine`.

## Run Locally

Install dependencies(make sure your directory is `outside_task`)

```bash
  npm install
```

Start the server

```bash
  npm start
```

## API Reference

#### Get all products

```http
  GET http://localhost:5000/
```

#### For Sale

```http
  POST http://localhost:5000/sale
```

| Body          | Type     | Description                           |
| :------------ | :------- | :------------------------------------ |
| `productName` | `string` | **Required**. Select product for Sale |
| `tender`      | `number` | **Required**. User Input Amount(coin) |
| `quantity`    | `number` | **Required**. Quantity of product     |

#### For Return

```http
  POST http://localhost:5000/return
```

| Body          | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `productName` | `string` | **Required**. Select product for Return |
| `quantity`    | `number` | **Required**. Quantity of product       |
