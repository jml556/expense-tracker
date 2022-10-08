import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { List } from "semantic-ui-react";

const ExpenseList = (props) => {
  const { expenses } = props;
  return (
    <List divided verticalAlign={"middle"}>
      {expenses.map(({ title, amount, category, date, description, id }) => {
        return (
          <List.Item
            key={id}
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "10px 5px",
              marginBottom: "20px",
            }}
          >
            <List.Header style={{ fontWeight: 1000 }}>
              <strong>{title}</strong>{" "}
            </List.Header>
            <List.Content>Description: {description}</List.Content>
            <List.Content>Amount: {amount}</List.Content>
            <List.Content>Date: {date}</List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};

export default ExpenseList;

/*
amount
: 
12
category
: 
"US"
date
: 
"2022-08-04"
description
: 
"ehladsf"
id
: 
"630fd97c1cc8f9dacd617580"
title
: 
"expense"

*/
