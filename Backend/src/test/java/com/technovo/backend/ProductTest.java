package com.technovo.backend;

import com.technovo.backend.entity.Product; // Product entity'ni içeri al
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ProductTest {

    @Test
    void urunOlusturmaTesti() {

        Product testUrunu = new Product();

        testUrunu.setName("PlayStation 5");
        testUrunu.setPrice(500.0);

        assertEquals("PlayStation 5", testUrunu.getName(), "Ürün ismi yanlış kaydedilmiş!");

        assertTrue(testUrunu.getPrice() > 0, "Hata: Ürün fiyatı sıfır veya eksi olamaz!");
    }
}