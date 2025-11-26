package com.example.demo.controller;

import com.example.demo.entity.Product;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private List<Product> products;
    public ProductController(){
        products = new ArrayList<>();
        products.add(new Product(1, "iPhone 17", 1789.0));
        products.add(new Product(2, "iPhone 16", 1678.9));
    }

    @GetMapping
    public List<Product> getAllProducts(){
        return  products;
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product){
        products.add(product);
        return product;
    }
}
