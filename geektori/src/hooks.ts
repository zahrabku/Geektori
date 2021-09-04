import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICardItem } from "./utils/DataDump";

export const useId = () => {
  const { id } = useParams<{ id: string }>();
  return id;
};

export default function useLocalStorage(key: string, initialValue: any) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  //   const getValue = () => {
  //     try {
  //       // Get from local storage by key
  //       const item = localStorage.getItem(key);
  //       // Parse stored json or if none return initialValue
  //       if (item) {
  //         setStoredValue(JSON.parse(item));
  //       }
  //     } catch (error) {
  //       // If error also return initialValue
  //       console.log(error);
  //     }
  //   };

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  //   useEffect(getValue, [key, storedValue]);

  return [storedValue, setValue];
}
