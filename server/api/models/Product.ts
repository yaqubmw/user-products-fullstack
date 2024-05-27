import mongoose, { Schema, Document, Model } from "mongoose";

interface ProductInterface extends Document {
  title: string;
  image: string;
  price: number;
  description: string;
  userId: mongoose.Types.ObjectId;
}

const ProductSchema: Schema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Product: Model<ProductInterface> = mongoose.model<ProductInterface>(
  "Product",
  ProductSchema
);

export default Product;
