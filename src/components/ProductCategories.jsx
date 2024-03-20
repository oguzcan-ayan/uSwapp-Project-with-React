import React from 'react';
import { SlUserFemale } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";
import { PiArmchairBold } from "react-icons/pi";
import { IoGameController } from "react-icons/io5";
import { TbEPassport } from "react-icons/tb";
import { GiStreetLight } from "react-icons/gi";
import { BiSolidCarMechanic } from "react-icons/bi";

function ProductCategories() {
    return (
        <>
            <section>
                <div className='products-content'>
                    <div>
                        <span><SlUserFemale /></span>
                        <span>Women</span>
                    </div>
                    <div>
                        <span><FaRegUser /></span>
                        <span>Men</span>
                    </div>
                    <div>
                        <span><FaBabyCarriage /></span>
                        <span>Baby</span>
                    </div>
                    <div>
                        <span><FaBookOpen /></span>
                        <span>Book & Stationery</span>
                    </div>
                    <div>
                        <span><AiOutlineLaptop /></span>
                        <span>Electronic</span>
                    </div>
                    <div>
                        <span><PiArmchairBold /><GiStreetLight /></span>
                        <span>Furniture</span>
                    </div>
                    <div>
                        <span><IoGameController /></span>
                        <span>Game & Console</span>
                    </div>
                    <div>
                        <span><TbEPassport /></span>
                        <span>Sport & Outdoor</span>
                    </div>
                    <div>
                        <span><BiSolidCarMechanic /></span>
                        <span>Auto Parts</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductCategories;