package com.example.demo.service;

import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    protected ProductService productService;

    @Test
    void testCreateProduct(){
        Product product = new Product(1, "HP Laptop", "Laptop", 1213.5);

        Mockito.when(productRepository.save(product)).thenReturn(product);

        Product result = productService.saveProduct(product);
        Assertions.assertEquals("Laptop", result.getCategory());
    }

    @Test
    void testGetAllProducts(){
        List<Product> products = List.of(
                new Product(1, "HP Laptop", "Laptop", 1213.5),
                new Product(1, "Dell Laptop", "Laptop", 2345.8)
        );

        Mockito.when(productRepository.findAll()).thenReturn(products);

        List<Product> result = productService.getAllProducts();
        Assertions.assertEquals(2, result.size());
        Assertions.assertEquals("HP Laptop", result.get(0).getTitle());
    }
}
