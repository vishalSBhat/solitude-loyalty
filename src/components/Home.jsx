import React, { useState, useEffect } from "react";
import matchMaker from "../utils/match-maker";
import CustomerForm from "./CustomerForm";
import Timeline from "./Timeline";

const Home = () => {
  const [presentCustomer, setCustomer] = useState({
    name: "Solitude",
    history: [],
    redeem_info: {
      info: "",
      items: [],
      redeem: false,
    },
  });
  const [customers_data, setCustomersData] = useState([]);
  const [SOLITUDE_MENU, setMenu] = useState([]);
  const [redeem_data, setRedeemData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("http://localhost:8080/customers");
      let data = await res.json();
      setCustomersData([...data]);
      res = await fetch("http://localhost:8080/menu");
      data = await res.json();
      setMenu([...data]);
      setRedeemData(matchMaker(data));
    }
    fetchData();
  }, []);

  const addCard = ({ name, date, itemsList }) => {
    let customer = customers_data.filter(
        (customer) => customer.name === name
      )[0],
      redeem_info = {},
      selectedName = "",
      history = [],
      tempCustomerData = customers_data;
    const suffix = ["st", "nd", "rd", "th"],
      visit_count = customer ? customer.history.length + 1 : 1;
    redeem_data.every((each) => {
      if (visit_count < each.visit_count) {
        redeem_info = {
          info: `You can avail any 1 of the 3 items on your ${
            each.visit_count
          }${suffix[each.visit_count > 3 ? 3 : each.visit_count - 1]} visit`,
          items: [...each.item],
          redeem: false,
        };
        return false;
      } else if (visit_count === each.visit_count) {
        redeem_info = {
          info: "Wo Hoo!!You can avail any 1 of the 3 items for free",
          items: [...each.item],
          redeem: true,
        };
        return false;
      }
      return true;
    });
    if (customer !== undefined) {
      if (presentCustomer.name === name) {
        selectedName = name;
        history = [...presentCustomer.history, { date, items: itemsList }];
      } else {
        selectedName = name;
        history = [...customer.history, { date, items: itemsList }];
      }
      tempCustomerData = customers_data.map((each) => {
        if (each.name === selectedName) each.history = [...history];
        return each;
      });
    } else {
      selectedName = name;
      history = [{ date, items: itemsList }];
      tempCustomerData.push({ name, history });
    }
    setCustomer({ name, history, redeem_info });
    setCustomersData([...tempCustomerData]);
  };

  return (
    <div className="body-container">
      <div className="container">
        <h1 style={{ fontSize: "min(7vw, 2rem)" }} className="pt-4 pl-3">
          Solitude Loyalty Program
        </h1>
        <CustomerForm menu={SOLITUDE_MENU} onSubmit={addCard} />
      </div>
      <Timeline customer={presentCustomer} />
    </div>
  );
};

export default Home;
