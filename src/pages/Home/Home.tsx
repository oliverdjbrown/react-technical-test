"use client";
import React, { useEffect } from "react";
import { People } from "@/mock/people.mock";
import { useDispatch } from "react-redux";
import { addPerson } from "@/redux/states";
import PeopleTable from "./components/PeopleTable/PeopleTable";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPerson(People));
  });

  return <PeopleTable />;
};

export default Home;
