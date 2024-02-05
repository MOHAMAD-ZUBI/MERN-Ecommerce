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
import { Variant } from "@/types/Product";
import { mutateCart } from "@/hooks/useCart";

type Props = {
  title: string;
  size: string;
  flavour: string;
  price: number;
  shipping: string;
  image: string;
};

type cartTableProps = {
  products: {
    product: Variant;
    flavor: string;
    quantity: number;
  }[];
};

const CartTable: FC<cartTableProps> = ({ products }) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    products[0].product
  );
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const { mutate: RemoveFromCart, isPending } = mutateCart({
    variantToRemove: selectedVariant._id,
    flavor: selectedFlavor,
  });

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
                      src={product.product.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="pt-[6px]">Size: {product.product.size}</h1>
                    <h1 className="pt-[6px]">Flavour: {product.flavor}</h1>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <h1 className="font-semibold">${product.product.price}</h1>
                </div>
              </TableCell>
              <TableCell>
                <QuantityCounter
                  counter={product.quantity}
                  key={product.product._id}
                />
              </TableCell>
              <TableCell>
                <div className="text-[#BEBCBD] uppercase">Free</div>
              </TableCell>
              <TableCell>
                <div>
                  <h1 className="font-semibold">${product.product.price}</h1>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <button
                    onClick={async () => {
                      await setSelectedVariant(product.product);
                      await setSelectedFlavor(product.flavor);
                      RemoveFromCart();
                    }}
                    disabled={isPending}
                    className=" text-red-800"
                  >
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
