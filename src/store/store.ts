import { configureStore } from "@reduxjs/toolkit";
import tenbatky from "./reduces/CountReduces"
import Random from "./reduces/Random";
import LightDark from "./reduces/LightDark";
import Number from "./reduces/number";
export const store = configureStore({

    reducer: {
        count :tenbatky,Random,LightDark,Number

    }
});