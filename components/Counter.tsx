import React from "react";
import { Button } from "react-native";
import { decrement, increment } from "../Redux/counterSlice";
import { View, Text } from "./Themed";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Increment Value</Text>
      <Button title="Increase" onPress={() => dispatch(increment())}></Button>
      <Text> {count} </Text>
      <Text>Decrement Value</Text>
      <Button title="Decrease" onPress={() => dispatch(decrement())}></Button>
      <Text> {count} </Text>
    </View>
  );
};

export default Counter;
