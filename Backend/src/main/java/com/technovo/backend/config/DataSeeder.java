package com.technovo.backend.config;

import com.technovo.backend.entity.Product;
import com.technovo.backend.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(ProductRepository repository) {
        return args -> {
            // Eğer veritabanında hiç ürün yoksa, bu 4 ürünü otomatik ekle
            if (repository.count() == 0) {
                repository.save(new Product(null, "Sony WH-1000XM5 Headphones", 349.99, 399.99, "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop", 4.9, 512, "Sony"));
                repository.save(new Product(null, "Apple MacBook Air M3", 1299.00, null, "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format&fit=crop", 4.8, 1024, "Apple"));
                repository.save(new Product(null, "Galaxy S24 Ultra", 1199.00, 1299.00, "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=400&auto=format&fit=crop", 4.7, 856, "Samsung"));
                repository.save(new Product(null, "Logitech MX Master 3S", 99.99, 119.99, "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=400&auto=format&fit=crop", 4.9, 2150, "Logitech"));
                System.out.println("Veritabanina ornek urunler basariyla eklendi kanka!");
            }
        };
    }
}