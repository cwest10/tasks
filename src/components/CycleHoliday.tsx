import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, changeHoliday] = useState<string>("🎄");

    function timeInYear(): void {
        if (holiday === "🐣") {
            changeHoliday("🎆");
        } else if (holiday === "🎆") {
            changeHoliday("🎃");
        } else if (holiday === "🎃") {
            changeHoliday("🦃");
        } else if (holiday === "🦃") {
            changeHoliday("🎄");
        } else {
            changeHoliday("🐣");
        }
    }

    function alphabetically(): void {
        if (holiday === "🎄") {
            changeHoliday("🐣");
        } else if (holiday === "🐣") {
            changeHoliday("🎆");
        } else if (holiday === "🎆") {
            changeHoliday("🎃");
        } else if (holiday === "🎃") {
            changeHoliday("🦃");
        } else {
            changeHoliday("🎄");
        }
    }

    // Time of Year
    // 🐣 Easter - April
    // 🎆 Fourth of July - July
    // 🎃 Halloween - October
    // 🦃 Thanksgiving - November
    // 🎄 Christmas - December

    // Alphabetically
    // 🎄 Christmas - December
    // 🐣 Easter - April
    // 🎆 Fourth of July - July
    // 🎃 Halloween - October
    // 🦃 Thanksgiving - November

    return (
        <div>
            <div>
                <Button onClick={timeInYear}>Advance by Year</Button>
                <Button onClick={alphabetically}>Advance by Alphabet</Button>
            </div>
            <div>
                <span> Holiday: {holiday} </span>
            </div>
            <p></p>
        </div>
    );
}
