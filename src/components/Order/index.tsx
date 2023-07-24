'use client';

import { Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { products } from "./_data";
import { ProductGrid } from "./ProductGrid";

export const Order = () => (
  <Box
    maxW="9xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
    bgGradient={"linear(to-b, blackAlpha.900, transparent)"}
  >
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
);