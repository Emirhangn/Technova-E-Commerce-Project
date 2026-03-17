package com.technovo.backend;

import com.technovo.backend.entity.Role;
import com.technovo.backend.entity.User;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    void kullaniciYetkiVeBilgiTesti() {
        
        User testKullanicisi = new User();
        testKullanicisi.setName("Emirhan");
        testKullanicisi.setEmail("emirhan@technovo.com");
        testKullanicisi.setPassword("gizliSifre123");

        testKullanicisi.setRole(Role.ADMIN);

        assertEquals("Emirhan", testKullanicisi.getName(), "İsim yanlış kaydedildi!");

        assertEquals("emirhan@technovo.com", testKullanicisi.getEmail(), "E-posta eşleşmiyor!");

        assertSame(Role.ADMIN, testKullanicisi.getRole(), "Güvenlik İhlali: Kullanıcı ADMIN yetkisi alamadı!");

        assertNotNull(testKullanicisi.getPassword(), "Kullanıcı şifresi boş (null) olamaz!");
    }
}