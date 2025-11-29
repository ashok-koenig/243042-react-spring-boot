package com.example.demo.service;

import com.example.demo.dto.OrderRequest;
import com.example.demo.entity.Order;
import com.example.demo.entity.Product;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductService productService;

    public Order createOrder(OrderRequest orderRequest){

        Product product = productService.getProductById(orderRequest.productId());

        Order order = new Order();
        order.setProduct(product);
        order.setQuantity(orderRequest.quantity());
        return orderRepository.save(order);

    }

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }
}
