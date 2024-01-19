import React, { FC, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Image from "next/image";
import { GoTrash } from "react-icons/go";
import QuantityCounter from "./QuantityCounter";

type Props = {
  title: string;
  size: string;
  flavour: string;
  price: number;
  shipping: string;
  image: string;
};

type cartTableProps = {
  products: Props[];
};

const CartTable: FC<cartTableProps> = ({ products }) => {
  const [quantity, setQuantity] = useState(1);
  const handleDecrease = () => {
    setQuantity((prev) => (prev !== 0 ? prev - 1 : 0));
  };
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>PRODUCT DETAILS</TableColumn>
        <TableColumn>PRICE</TableColumn>
        <TableColumn>QUANTITY</TableColumn>
        <TableColumn>SHIPPING</TableColumn>
        <TableColumn>SUBTOTAL</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        {products.map((product) => {
          return (
            <TableRow key="1">
              <TableCell>
                <div className="flex flex-row gap-[15px] ">
                  <div>
                    <Image
                      height={120}
                      width={105}
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold ">{product.title}</h1>
                    <h1 className="pt-[6px]">Size: {product.size}</h1>
                    <h1 className="pt-[6px]">Flavour: {product.flavour}</h1>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <h1 className="font-semibold">${product.price}</h1>
                </div>
              </TableCell>
              <TableCell>
                <QuantityCounter key={product.title} />
              </TableCell>
              <TableCell>
                <div className="text-[#BEBCBD] uppercase">
                  {product.shipping}
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <h1 className="font-semibold">${product.price}</h1>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <button className=" text-red-800">
                    <GoTrash size={18} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CartTable;
