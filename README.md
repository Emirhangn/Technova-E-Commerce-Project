# 🚀 Technova E-Ticaret Platformu

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

🚀 Technova E-Commerce Platform
Technova, modern web teknolojileriyle geliştirilmiş, ölçeklenebilir ve güvenli bir e-ticaret platformudur. Proje, backend tarafında Spring Boot'un gücünü, frontend tarafında ise React'in esnekliğini kullanarak tam kapsamlı bir alışveriş deneyimi sunar.

## 🛠️ Kullanılan Teknolojiler
Backend: Java 17, Spring Boot, Spring Security

Frontend: React.js, Tailwind CSS / Bootstrap

Veritabanı: PostgreSQL

Güvenlik: JWT (JSON Web Token)

🔐 Güvenlik ve Kimlik Doğrulama (JWT)
Sistemde güvenlik, JWT (JSON Web Token) tabanlı bir yapı üzerine kuruludur. Kullanıcılar giriş yaptıklarında kendilerine özel bir token tanımlanır ve bu token üzerinden yetkilendirme yapılır.

Stateless Yapı: Sunucu tarafında oturum tutulmaz, tüm yetkilendirme token üzerinden döner.

Role-Based Access Control (RBAC): Kullanıcılar USER ve ADMIN rolleriyle birbirinden ayrılır.


🛡️ Yetkilendirme Kuralları
Sistemdeki veri bütünlüğünü korumak adına hassas işlemler sıkı yetkilendirme kurallarına bağlanmıştır:

Ürün Silme Ve Ekleme / Kullanıcı Yönetimi: Bu yetkiler tamamen Admin rolüne aittir.

Kısıtlamalar: USER rolüne sahip standart bir kullanıcı, sistemdeki ürünleri veya diğer kullanıcıları asla silemez. Sadece kendi profil bilgilerini ve sipariş geçmişini yönetebilir.


👨‍💼 Admin Paneli Özellikleri

Gelişmiş admin paneli sayesinde platformun tüm yönetimi tek bir noktadan sağlanır:

Ürün Yönetimi: Yeni ürün ekleme, stok güncelleme ve ürün silme işlemleri.

Kullanıcı Denetimi: Kayıtlı kullanıcıların listelenmesi ve yönetilmesi.

Sipariş Takibi: Gelen siparişlerin durumunun anlık olarak izlenmesi.

Dashboard: Satış verileri ve kullanıcı hareketlerinin genel özeti.


## ⚙️ Kurulum ve Çalıştırma

### Gereksinimler
* Java 17+
* Node.js & npm
* PostgreSQL

1. **Projeyi klonlayın:**
   ```bash
   git clone [https://github.com/Emirhangn/technovo-ecommerce.git](https://github.com/Emirhangn/technovo-ecommerce.git)

2. Backend Kurulumu:
Backend dizinine gidin.
application.properties dosyasındaki veritabanı url, kullanıcı adı ve şifre bilgilerinizi kendi lokal PostgreSQL ayarlarınıza göre güncelleyin.
Uygulamayı başlatın.

3. Frontend Kurulumu:
FRONTEND dizinine gidin.
Bağımlılıkları yükleyin: npm install
Geliştirme sunucusunu başlatın: npm run dev

👨‍💻 Geliştirici
Emirhan

GitHub: @Emirhangn
