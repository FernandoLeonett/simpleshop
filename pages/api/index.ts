// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { FaProductHunt } from "react-icons/fa";
import Product from "../../interfaces/Product";

type ResponseError = {
  message: string;
};

export default function handler(
  req: NextApiRequest,

  res: NextApiResponse<Product | ResponseError>
) {
  console.clear()
  console.log(req)
  const product :Product ={title:"un tituo",category:"",description:"",price:30,id:"",image:""}
  res.status(200).json(product);
}
