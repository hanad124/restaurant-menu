"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuData } from "@/menuData";
import Image from "next/image";
import { shuffle } from "lodash"; // Import the lodash shuffle function

const MealCategories = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterValue, setFilterValue] = useState("All");

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching meal categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch Meals
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          ` https://www.themealdb.com/api/json/v1/1/search.php?s=${filterValue}`
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="">
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList>
              <TabsTrigger
                key="all"
                value="all"
                onClick={() => setFilterValue("all")}
              >
                All
              </TabsTrigger>
              {Array.from(new Set(menuData.map((menu) => menu.category))).map(
                (category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setFilterValue(category)}
                  >
                    {category}
                  </TabsTrigger>
                )
              )}
            </TabsList>
            <TabsContent value="all">
              {filterValue === "all"
                ? shuffle(menuData).map((meal) => (
                    <div
                      key={meal.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex justify-center items-center">
                        <Image
                          src={meal.image}
                          alt={meal.name}
                          width={100}
                          height={100}
                          className="w-[100px] h-[100px] rounded-full"
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold">{meal.name}</h3>
                          <p className="text-sm text-gray-500">
                            {meal.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : menuData
                    .filter((meal) => meal.category === filterValue)
                    .map((meal) => (
                      <div
                        key={meal.id}
                        className="flex justify-between items-center"
                      >
                        <div className="flex justify-center items-center">
                          <Image
                            src={meal.image}
                            alt={meal.name}
                            width={100}
                            height={100}
                            className="w-[100px] h-[100px] rounded-full"
                          />
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold">
                              {meal.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {meal.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
            </TabsContent>
            {Array.from(new Set(menuData.map((menu) => menu.category))).map(
              (category) => (
                <TabsContent value={category} key={category}>
                  {menuData
                    .filter((meal) => meal.category === category)
                    .map((meal) => (
                      <div
                        key={meal.id}
                        className="flex justify-between items-center"
                      >
                        <div className="flex justify-center items-center">
                          <Image
                            src={meal.image}
                            alt={meal.name}
                            width={100}
                            height={100}
                            className="w-[100px] h-[100px] rounded-full"
                          />
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold">
                              {meal.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {meal.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </TabsContent>
              )
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MealCategories;
