import React from "react";
import { Label, TextInput, Button, Card } from "flowbite-react";
import { useInputHandler, useFormSubmit } from "../customHooks";

const Form = () => {
  const { getData } = useFormSubmit();

  const expenseHandler = useInputHandler();
  const amountHandler = useInputHandler();
  const dateHandler = useInputHandler();
  const categoryHandler = useInputHandler();
  const descriptionHandler = useInputHandler();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: expenseHandler.value,
      amount: amountHandler.value,
      date: dateHandler.value,
      category: categoryHandler.value,
      description: descriptionHandler.value,
    };
    try {
      getData(data);
    } catch (e) {
      console.log(e);
    }
    [
      expenseHandler,
      amountHandler,
      dateHandler,
      categoryHandler,
      descriptionHandler,
    ].forEach((handler) => handler.setValue(""));
    console.log("ran");
  };

  return (
    <div className="w-53">
      <Card className="w-96">
        <h2 className="">Add An Expense</h2>
        <form className="flex flex-col gap-4 w-96" onSubmit={onSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title of Expense" />
            </div>
            <TextInput
              id="title"
              placeholder="Expense title"
              required={true}
              {...expenseHandler}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="amount" value="Amount" />
            </div>
            <TextInput
              id="amount"
              placeholder="0.00"
              required={true}
              {...amountHandler}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Date" />
            </div>
            <TextInput id="date" type="date" required={true} {...dateHandler} />
          </div>
          <div>
            <label
              for="categories"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select a Category
            </label>
            <select
              id="categories"
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...categoryHandler}
            >
              <option selected>Choose a category</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <TextInput
              id="description"
              required={true}
              {...descriptionHandler}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
