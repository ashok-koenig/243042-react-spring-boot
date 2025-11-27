package com.example.demo.controller;

import com.example.demo.entity.Product;
import com.example.demo.service.ProductService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    private static  final Logger logger = LogManager.getLogger(ProductController.class);
    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product){
        logger.info("New product created successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.saveProduct(product));
    }

    @GetMapping
    public List<Product> allProducts(){
        logger.info("Listing all products");
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getAProduct(@PathVariable Integer id){
        return productService.getProductById(id);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Integer id, @RequestBody Product product){
        productService.getProductById(id);
        product.setId(id);
        logger.info("Product updated successfully");
        return productService.saveProduct(product);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id){
        productService.getProductById(id);
        productService.deleteProductById(id);
        logger.warn("Product deleted successfully");
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}
